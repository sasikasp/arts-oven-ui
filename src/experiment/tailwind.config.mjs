/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('artsovenui'),
	],
	artsovenui: {
	   logs: true,
		themes: ['dark', 'light', 'marble', 'eco', 'vintage'],
		shadow: true,
		gradient: true,
	},

}
