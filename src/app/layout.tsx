import type { Metadata } from 'next'
import { GridLayout } from './components/GridLayout/GridLayout'
// import { Be_Vietnam_Pro } from 'next/font/google'
import './global.css'

// const be_vietname_pro = Be_Vietnam_Pro({ 
// 	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// 	subsets: ['latin']
// })

import { Be_Vietnam_Pro, Bayon } from 'next/font/google';
import localFont from 'next/font/local'
import { NavBar } from './components/NavBar'

export const be_vietnam_pro = Be_Vietnam_Pro({
	weight: ["300", "400", "500", "600"],
	variable: '--be_vietnam_pro',
	subsets: ['latin']
})

export const bayon = Bayon({
	weight: "400",
	variable: '--bayon',
	subsets: ['latin']
})

export const helvetica_neue = localFont({
	src: [
		{
			path: './fonts/HelveticaNeue-light.woff2',
			weight: '300',
			style: 'light'
		},
		{
			path: './fonts/HelveticaNeue-regular.woff2',
			weight: '400',
			style: 'normal'
		},
	],
	variable: '--helvetica_neue'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${helvetica_neue.variable} ${be_vietnam_pro.variable} ${bayon.variable}`}>
      <body>
		{ children }
		<NavBar />
		</body> 
    </html>
  )
}
