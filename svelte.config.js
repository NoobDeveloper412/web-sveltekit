import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$json: 'src/lib/json',
			$layouts: 'src/lib/layouts',
			$utils: 'src/lib/utils',
			$pages: 'src/lib/pages',
			$lib: 'src/lib',
			$styles: 'src/lib/styles',
			$routes: 'src/routes'
		}
	}
};

export default config;
