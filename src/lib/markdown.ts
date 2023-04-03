import type { Renderer } from 'marked';
import { marked } from 'marked';

const renderer: Partial<Renderer> = {
	link(href, title, text) {
		return `<a href="${href}"${title ? ` title=${title}` : ''} target="_blank">${text}</a>`;
	}
};

marked.use({ renderer });

export const markdown = (content: string) => {
	return marked(content.trim());
};
