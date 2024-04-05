'use client'

import { FC } from 'react'
import styles from './NavBar.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const NavBar: FC = () => {
	const pathname = usePathname()

	return (
		<>
			{/* { pathname !== '/' && <div className={styles.navbarspacer}/> } */}
			<div className={styles.navbar}>
				<Link href={(pathname.includes('work') || pathname.includes('for')) ? '/' : '/work'}><div style={{
					textDecoration: (pathname.includes('work') || pathname.includes('for')) ? 'underline' : undefined
				}}>Work</div></Link>
				<Link href={pathname.includes('info') ? '/' : '/info'}><div style={{
					textDecoration: pathname.includes('info') ? 'underline' : undefined
				}}>Info</div></Link>
			</div>
		</>
	)
}