import { readDirectory, type Content } from '$lib/articles';
import { error } from '@sveltejs/kit';

export type Data = {
	article: Content;
	next?: Content;
};

const findArticle = (
	articles: Partial<Content>,
	slug: string,
	found?: Content
): Data | undefined => {
	if (articles?.data?.slug === slug) {
		return { article: articles as Content };
	}

	if (!articles.children) {
		return;
	}

	for (const article of articles.children) {
		const result = findArticle(article, slug, found);
		if (result?.next) {
			return result;
		}
		if (found) {
			return { article: found, next: article };
		}
		if (result?.article) {
			found = findArticle(article, slug)?.article;
		}
	}

	if (found) {
		return { article: found };
	}
};

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const articles = await readDirectory(`./content`, undefined);
	const data = findArticle({ children: articles }, params.slug);
	if (!data) {
		throw error(404, 'Not found');
	}
	return data;
}
