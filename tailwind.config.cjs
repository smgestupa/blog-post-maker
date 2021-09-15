const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			spacing: {
				'112': '28rem',
				'120': '30rem'
			}
		},
	},
	plugins: [],
};

module.exports = config;
