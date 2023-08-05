import { FC } from 'react'
import styles from './InfoGrid.module.css'
import { GridLayoutProps } from './GridLayout'

export const InfoGrid: FC<GridLayoutProps> = ({
	children,
}) => {
	return (
		<div className={styles.infogrid}>
			{ children }
		</div>
	)
}