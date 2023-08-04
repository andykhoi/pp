import { FC, ReactNode } from 'react'
import styles from './gridlayout.module.css'
interface GridLayoutProps {
	children: ReactNode
	// rowTemplate?: string,
	height?: string
	padding?: string
}

export const GridLayout: FC<GridLayoutProps> = ({
	children,
	height,
	padding
	// rowTemplate
}) => {
	return (
		<div className={styles.gridlayout} style={{
			// gridTemplateRows: rowTemplate
			height,
			padding
		}}>
			{ children }
		</div>
	)
}