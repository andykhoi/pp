import { FC, ReactNode } from 'react'
import styles from './Text.module.css'

interface TextProps {
	children: ReactNode
	color?: string
	fontWeight?: number
	margin?: string
}

export const Text: FC<TextProps> = ({
	children,
	color,
	fontWeight,
	margin
}) => {
	return (
		<div className={styles.text} style={{ color, fontWeight, margin }}>
			{/* <p>{ children }</p> */}
			{ children }
		</div>
	)
}