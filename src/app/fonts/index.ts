import { Be_Vietnam_Pro, Bayon } from 'next/font/google';
import localFont from 'next/font/local'

export const be_vietnam_pro = Be_Vietnam_Pro({
	weight: ["300", "400"],
	variable: '--be_vietnam_pro'
})

export const bayon = Bayon({
	weight: "400",
	variable: '--bayon'
})

export const helvetica_neue = localFont({
	src: [
		{
			path: './HelveticaNeue-light.woff2',
			weight: '300',
			style: 'light'
		},
		{
			path: './HelveticaNeue-regular.woff2',
			weight: '400',
			style: 'normal'
		},
	],
	variable: '--helvetica_neue'
})