'use client'

import { FC } from 'react'
import styles from './NavBar.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const NavBar: FC = () => {
	const pathname = usePathname()

	return (
		<>
			{ pathname !== '/' && <div className={styles.navbarspacer}/> }
			<div className={styles.navbar}>
			<Link href='/work'><div style={{
				textDecoration: pathname.includes('work') ? 'underline' : undefined
			}}>Work</div></Link>
			<Link href='/info'><div style={{
				textDecoration: pathname.includes('info') ? 'underline' : undefined
			}}>Info</div></Link>
			</div>
		</>
	)
}