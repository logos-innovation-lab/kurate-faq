import { readFile } from 'fs/promises';
import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { marked } from 'marked';

type Data = {
	title: string;
	summary: string;
};

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	let file;
	try {
		file = await readFile(`./content/${params.slug}.md`, 'utf-8');
	} catch (err) {
		throw error(404, 'Not found');
	}

	const { data, content } = matter(file);
	return {
		...(data as Data),
		slug: params.slug,
		content: marked(content)
	};
}
