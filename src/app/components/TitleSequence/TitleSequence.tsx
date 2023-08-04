import { FC } from 'react'
import styles from './TitleSequence.module.css'
export const TitleSequence: FC = () => {
	return (
		<div className={styles.titlesequence}>
			<div className={styles.name}>andy khoi tran:</div>
			<div className={styles.marquee}>
				<div className={styles.fadeRight} />
				<div className={styles.fadeLeft} />
				<div className={styles.marquee__content}>
					<div>
						developer /
					</div>
					<div>
						designer /
					</div>
					<div>
						los angeles /
					</div>
				</div>
				<div className={styles.marquee__content}>
					<div>
						developer /
					</div>
					<div>
						designer /
					</div>
					<div>
						los angeles /
					</div>
				</div>
			</div>
			{/* <span className={styles.movingText}>Testing this thingy Testing this thingy</span> */}
		</div>
	)
}