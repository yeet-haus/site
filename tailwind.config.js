/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'yeeter-yellow': '#fedb1d',
				'yeeter-active-yellow': '#FCD500',
				'yeeter-hover-yellow': '#FFED8D',
				'yeeter-light-yellow': '#f9e1a3',
				'yeeter-pink': '#F098C6',
				'yeeter-active-pink': '#f17bb9',
				'yeeter-hover-pink': '#FAB8DB',
				'yeeter-bg': '#655c31',
			},
		},
	},
	plugins: [],
};
