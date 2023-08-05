import { FC, ReactNode } from 'react'
import { default as gridStyles } from './GridLayout.module.css'
import { default as navbarStyles } from '../NavBar/NavBar.module.css'
export interface GridLayoutProps {
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
		<>
			<div className={gridStyles.gridlayout} style={{
				// gridTemplateRows: rowTemplate
				height,
				padding
			}}>
				{ children }	
			</div>
			{/* <div className={navbarStyles.navbarspacer} /> */}
		</>
	)
}