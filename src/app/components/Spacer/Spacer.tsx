import { FC, CSSProperties } from 'react'
import styles from './Spacer.module.css'

interface SpacerProps {
	height: string
	breakpointHeight?: string
}

export const Spacer: FC<SpacerProps> = ({
	height,
	breakpointHeight,
}) => {
	return (
		<div className={styles.spacer} style={{
			'--height': height,
			'--breakpoint-height': breakpointHeight ? breakpointHeight : height
		} as CSSProperties }/>
	)
}