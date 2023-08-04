import { FC } from 'react'
import styles from './Spacer.module.css'

interface SpacerProps {
	height: string
}

export const Spacer: FC<SpacerProps> = ({
	height
}) => {
	return (
		<div className={styles.spacer} style={{ height }}/>
	)
}