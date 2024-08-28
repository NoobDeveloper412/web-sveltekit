import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null, // Use '200.html' if you prefer SPA behavior
            strict: false   // Set to false to allow non-prerenderable routes
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/my-repo' : '',
        },
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
