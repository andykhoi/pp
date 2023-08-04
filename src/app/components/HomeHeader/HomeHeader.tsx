import { FC } from 'react'
import styles from './HomeHeader.module.css'
import Image from 'next/image'

export const HomeHeader: FC = () => {
	return (
		// how to add css interactivity with css modules? 
		<div className={styles.homeHeader}>
			<div className={styles.pp}>
				<Image src='/pp.png' fill alt="Profile picture" objectFit='cover' />
			</div>
			<div>
				<h2 className={styles.homeName}>Andy Khoi Tran</h2>
				<h4 className={styles.homeLocation}>📍 Los Angeles</h4>
			</div>
		</div>
	)
}

// export default HomeHeader