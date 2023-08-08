import { FC } from 'react'
import Image from 'next/image'
import styles from './ProjectHeader.module.css'

interface ProjectHeaderProps {
	title: string
	software: string[]
	thumbnail?: string
	alt?: string
}

export const ProjectHeader: FC<ProjectHeaderProps> = ({
	title,
	software,
	thumbnail = null,
	alt = null
}) => {
	return (
		<div className={styles.projectheader}>
			<div className={styles.projecttitle}>
				{ 
					thumbnail && alt && 
					<div>
						<Image priority quality={65} src={thumbnail} height={70} alt={alt} width={70} style={{objectFit: 'contain'}}/>
					</div>
				}
				<div>{ title }</div>
			</div>
			<div className={styles.subtitle}>
				<div>Software:</div>
				<div className={styles.marquee}>
					<div className={styles.fadeRight} />
					<div className={styles.fadeLeft} />
					<div className={styles.marquee__content}>
						{
							software.map(name => 
								<>
									<div key={name}>{ `${name}` }</div>
									<div>/</div>
								</>
						)
						}
					</div>
					<div className={styles.marquee__content}>
						{
							software.map(name => 
								<>
									<div key={name}>{ `${name}` }</div>
									<div>/</div>
								</>
							)
						}
					</div>
				</div>
			</div>
		</div>
	)
}