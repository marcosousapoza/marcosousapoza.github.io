import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

import type { Config } from '@sveltejs/kit';

const config: Config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.BASE_PATH ?? ''
		}
	}
};

export default config;
