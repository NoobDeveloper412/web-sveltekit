import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
	plugins: [
		sveltekit(), // Include SvelteKit plugin for Vite
		yaml() // Add the YAML plugin to handle .yaml files
	]
});
