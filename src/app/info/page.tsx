import { GridLayout } from '../components/GridLayout'
import { Text } from '../components/Text'
import Link from 'next/link'
import styles from './Info.module.css'

export default function Info() {
	return (
		<GridLayout padding='32px 0px 0px 0px'>
			<Text>I care a lot about making storytelling a better experience online. I believe through thoughtful design and giving power to new generations of storytellers this is possible. <Link href="/work/mag">Andy Mag</Link> is a collaborative magazine with this mission in mind.<br/><br/>I am always learning on the fly. Currently building a lot with React, Typescript, NextJS,  Figma, plus whatever other necessary tools come my way.<br /><br />*love meeting creatives, please reach out!</Text>
		</GridLayout>
	)
}