/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {  colors: {
            customBlack: '#281F1F',
            customBlock: '#DEBAB6',
            customWhite: '#F5F5D2',
            customBg: '#F8F4ED',}},
	},

	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
