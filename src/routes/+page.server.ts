// @ts-expect-error https://github.com/sveltejs/kit/issues/1689
import { readdir, readFile } from 'fs/promises';
import { error } from '@sveltejs/kit';
import matter from 'gray-matter';

type Data = {
	title: string;
	summary: string;
};

type Article = Data & {
	slug: string;
};

/** @type {import('./$types').PageLoad} */
export async function load() {
	let files: string[];
	try {
		files = await readdir('./content');
	} catch (err) {
		throw error(500, 'Internal server error');
	}

	const articles = await Promise.all(
		files.map(async (name) => {
			const file = await readFile(`./content/${name}`, 'utf-8');
			const { data } = matter(file);
			return {
				...(data as Data),
				slug: name.substring(0, name.length - 3)
			} as Article;
		})
	);

	return { articles };
}
