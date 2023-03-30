import { readDirectory } from '$lib/articles';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const articles = await readDirectory('./content', undefined);
	return { articles };
}
