// import { GridLayout } from '../components/GridLayout'
import { Text } from '../components/Text'
import Link from 'next/link'
import styles from './Info.module.css'
import { InfoGrid } from '../components/Grids'
import { Spacer } from '../components/Spacer'
// import { GridLayout } from '../components/Grids

export default function Info() {
	return (
		// <GridLayout>
		// 	<Text>I care a lot about making storytelling a better experience online. I believe through thoughtful design and giving power to new generations of storytellers this is possible. <Link href="/work/mag">Andy Mag</Link> is a collaborative magazine with this mission in mind.<br/><br/>I am always learning on the fly. Currently building a lot with React, Typescript, NextJS,  Figma, plus whatever other necessary tools come my way.<br /><br />*love meeting creatives, please reach out!</Text>
		// </GridLayout>
		<InfoGrid>
			{/* <Text>
				I care a lot about making storytelling a better experience online. I believe through thoughtful design and giving power to new generations of storytellers this is possible. <Link href="/work/mag">Andy Mag</Link> is a collaborative magazine with this mission in mind.<br/><br/>I am always learning on the fly. Currently building a lot with React, Typescript, NextJS,  Figma, plus whatever other necessary tools come my way.
				<br /><br />
				*love meeting creatives, please reach <a href = "mailto: contact@andyktran.com">out</a>!
				<br /><br />
				<div className={styles.links}>
					<a target="_blank" href="https://www.github.com/andykhoi">
						<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M 5.6875 5 C 5.6875 5 5 6.207031 5 8.25 C 5 9.605469 5.308594 10.320313 5.53125 10.6875 C 3.96875 12.3125 3 14.515625 3 17.34375 C 3 24.585938 7.589844 27 16 27 C 24.410156 27 29 24.585938 29 17.34375 C 29 14.417969 28.085938 12.21875 26.59375 10.625 C 26.964844 9.515625 27.382813 7.421875 26.34375 5 C 23.242188 5 20.65625 7.382813 20.5625 7.46875 C 19.113281 7.152344 17.574219 7 16 7 C 14.394531 7 12.820313 7.195313 11.34375 7.5625 C 9.265625 5.503906 6.757813 5 5.6875 5 Z M 20.6875 15.4375 C 21.53125 15.429688 22.3125 15.5 23 15.71875 C 24.832031 16.300781 26 17.984375 26 19.875 C 26 25.109375 23.191406 26 16 26 C 10.65625 26 6.3125 25.058594 6.3125 20.0625 C 6.3125 18.15625 7.347656 17.078125 8.09375 16.40625 C 9.734375 14.929688 12.324219 15.65625 16 15.65625 C 17.671875 15.65625 19.277344 15.453125 20.6875 15.4375 Z M 10.5 18 C 9.671875 18 9 18.894531 9 20 C 9 21.105469 9.671875 22 10.5 22 C 11.328125 22 12 21.105469 12 20 C 12 18.894531 11.328125 18 10.5 18 Z M 21.5 18 C 20.671875 18 20 18.894531 20 20 C 20 21.105469 20.671875 22 21.5 22 C 22.328125 22 23 21.105469 23 20 C 23 18.894531 22.328125 18 21.5 18 Z M 10.34375 18.84375 C 10.578125 18.84375 10.75 19.042969 10.75 19.28125 C 10.75 19.519531 10.578125 19.71875 10.34375 19.71875 C 10.109375 19.71875 9.90625 19.519531 9.90625 19.28125 C 9.90625 19.042969 10.109375 18.84375 10.34375 18.84375 Z M 21.34375 18.84375 C 21.578125 18.84375 21.75 19.042969 21.75 19.28125 C 21.75 19.519531 21.578125 19.71875 21.34375 19.71875 C 21.109375 19.71875 20.90625 19.519531 20.90625 19.28125 C 20.90625 19.042969 21.109375 18.84375 21.34375 18.84375 Z"></path></svg>
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/andy-tran-907535145/">
						<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"></path></svg>	
					</a>
					<a target="_blank" href="/resume.pdf" download="resume.pdf">
						<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M17 17V19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19V4H5V15H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V19C21 20.6569 19.6569 22 18 22H4C2.34315 22 1 20.6569 1 19V17H17Z"></path></svg>
					</a>
				</div>
			</Text> */}
			<Text>
				I care a lot about making the web a more inclusive and innovative place. I believe through thoughtful design and educating creative technologists this is possible.<br/><br/>I am always learning on the fly. Currently building a lot with React, Typescript, NextJS,  Figma, plus whatever other necessary tools come my way.
				<br /><br />
				*love meeting creatives, please reach <a href = "mailto: contact@andyktran.com">out</a>!
				<br /><br />
				<div className={styles.links}>
					<a target="_blank" href="https://www.github.com/andykhoi">
						<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M 5.6875 5 C 5.6875 5 5 6.207031 5 8.25 C 5 9.605469 5.308594 10.320313 5.53125 10.6875 C 3.96875 12.3125 3 14.515625 3 17.34375 C 3 24.585938 7.589844 27 16 27 C 24.410156 27 29 24.585938 29 17.34375 C 29 14.417969 28.085938 12.21875 26.59375 10.625 C 26.964844 9.515625 27.382813 7.421875 26.34375 5 C 23.242188 5 20.65625 7.382813 20.5625 7.46875 C 19.113281 7.152344 17.574219 7 16 7 C 14.394531 7 12.820313 7.195313 11.34375 7.5625 C 9.265625 5.503906 6.757813 5 5.6875 5 Z M 20.6875 15.4375 C 21.53125 15.429688 22.3125 15.5 23 15.71875 C 24.832031 16.300781 26 17.984375 26 19.875 C 26 25.109375 23.191406 26 16 26 C 10.65625 26 6.3125 25.058594 6.3125 20.0625 C 6.3125 18.15625 7.347656 17.078125 8.09375 16.40625 C 9.734375 14.929688 12.324219 15.65625 16 15.65625 C 17.671875 15.65625 19.277344 15.453125 20.6875 15.4375 Z M 10.5 18 C 9.671875 18 9 18.894531 9 20 C 9 21.105469 9.671875 22 10.5 22 C 11.328125 22 12 21.105469 12 20 C 12 18.894531 11.328125 18 10.5 18 Z M 21.5 18 C 20.671875 18 20 18.894531 20 20 C 20 21.105469 20.671875 22 21.5 22 C 22.328125 22 23 21.105469 23 20 C 23 18.894531 22.328125 18 21.5 18 Z M 10.34375 18.84375 C 10.578125 18.84375 10.75 19.042969 10.75 19.28125 C 10.75 19.519531 10.578125 19.71875 10.34375 19.71875 C 10.109375 19.71875 9.90625 19.519531 9.90625 19.28125 C 9.90625 19.042969 10.109375 18.84375 10.34375 18.84375 Z M 21.34375 18.84375 C 21.578125 18.84375 21.75 19.042969 21.75 19.28125 C 21.75 19.519531 21.578125 19.71875 21.34375 19.71875 C 21.109375 19.71875 20.90625 19.519531 20.90625 19.28125 C 20.90625 19.042969 21.109375 18.84375 21.34375 18.84375 Z"></path></svg>
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/andy-tran-907535145/">
						<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"></path></svg>	
					</a>
					<a target="_blank" href="/resume.pdf" download="resume.pdf">
						<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M17 17V19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19V4H5V15H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V19C21 20.6569 19.6569 22 18 22H4C2.34315 22 1 20.6569 1 19V17H17Z"></path></svg>
					</a>
				</div>
			</Text>
		</InfoGrid>
	)
}