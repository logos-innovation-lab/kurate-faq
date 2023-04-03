// @ts-expect-error https://github.com/sveltejs/kit/issues/1689
import { readdir, readFile, stat } from 'fs/promises';
// @ts-expect-error https://github.com/sveltejs/kit/issues/1689
import { join, relative, parse } from 'path';
import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { markdown } from './markdown';

export type Data = {
	title: string;
	order: number;
};

export type Article = Data & {
	slug: string;
};

export type Content = {
	data: Article;
	content: string;
	children?: Content[];
};

export type Articles = Content[];

const getSlug = (basePath: string, path: string): string => {
	const { dir, name } = parse(relative(basePath, path));
	return name === 'index' ? dir : dir + '/' + name;
};

const readMarkdown = async (basePath: string, filePath: string): Promise<Content> => {
	const { data, content } = matter(await readFile(filePath, 'utf-8'));
	return {
		data: {
			...(data as Data),
			slug: getSlug(basePath, filePath)
		},
		content: markdown(content)
	};
};

const readIndex = async (basePath: string, dirPath: string) => {
	return await readMarkdown(basePath, join(dirPath, 'index.md'));
};

export const readDirectory = async <DirectoryPath extends string | undefined>(
	basePath: string,
	directoryPath: DirectoryPath
): Promise<DirectoryPath extends string ? Content : Articles> => {
	const dirPath = directoryPath || basePath;
	let files: string[];
	try {
		files = await readdir(dirPath);
	} catch (err) {
		throw error(500, 'Internal server error');
	}

	const index = directoryPath ? await readIndex(basePath, dirPath) : {};
	const promises = files.map(async (file) => {
		if (file === 'index.md') {
			return;
		}

		const path = join(dirPath, file);
		const stats = await stat(path);

		return stats.isDirectory() ? readDirectory(basePath, path) : readMarkdown(basePath, path);
	});

	let children = (await Promise.all(promises)).filter(Boolean) as Content[];
	children = children.sort((a, b) => (a?.data?.order ?? Infinity) - (b?.data?.order ?? Infinity));

	// TODO: Not sure why this doesn't work without "as"
	return (directoryPath ? { ...index, children } : children) as DirectoryPath extends string
		? Content
		: Articles;
};
