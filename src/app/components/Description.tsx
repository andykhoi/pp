import { FC } from 'react'
import styles from '../home.module.css'

export const Description: FC = () => {
	return (
		<div className={styles.description}>
			<p>Hey! I&apos;m a developer, designer, and youngest of 5 Trans. I care a lot about making storytelling a better experience online. Content can get lost so quickly in the noise - forgettable within seconds. Trying to launch Andy Mag to change that.</p> 
			<p>Always learning on the fly. Currently building a lot with React, Typescript, and NextJS. Currently open to work. A few projects that I&apos;ve worked on below.</p>
		</div>
	)
}