import { FC } from 'react'
import styles from './ProjectNav.module.css'
import Link from 'next/link'

interface ProjectNavProps {
	link: string
}

export const ProjectNav: FC<ProjectNavProps> = ({
	link
}) => {
	return (
		<div className={styles.projectnav}>
			<Link href='/work'>
				<div>
					<svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.21567 0.510211C8.57427 0.861773 8.57427 1.44537 8.22271 1.80396L3.95474 6.08599H20.218C20.7172 6.08599 21.125 6.49381 21.125 7.00006C21.125 7.50631 20.7172 7.91412 20.218 7.91412H3.95474L8.22974 12.1962C8.5813 12.5547 8.57427 13.1313 8.22271 13.4899C7.86411 13.8415 7.29458 13.8415 6.93599 13.4829L1.14224 7.64693C1.06489 7.56256 1.00161 7.47115 0.952393 7.35865C0.903174 7.24615 0.88208 7.12662 0.88208 7.00709C0.88208 6.76802 0.973487 6.54302 1.14224 6.36724L6.93599 0.531305C7.28052 0.16568 7.85708 0.158648 8.21567 0.510211Z" fill="black"/>
					</svg>
				</div>
			</Link>
			<div>
				<a target="_blank" href={link}>Visit Site</a>
			</div>
		</div>
	)
}