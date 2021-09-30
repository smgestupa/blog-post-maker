import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        "postcss": true
    })],

	kit: {
		vite: {
			resolve: {
				alias: {
					$components: resolve( 'src/components' ),
					$stores: resolve( 'src/stores' )
				}
			}
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
