"use client"

import { FC, useEffect, useState } from 'react'
import ReactPlayer from 'react-player/file';
import styles from './VideoPreview.module.css'
import Link from 'next/link'

interface VideoPreviewProps {
	src: string,
	link: string
	// link?: {
	// 	href: string,
	// 	name: string
	// },

}

export const VideoPreview: FC<VideoPreviewProps> = ({
	src,
	link
}) => {
	const [playing, setPlaying] = useState<boolean>(true)
	const [mounted, setMounted] = useState<boolean>(false)

	const togglePlay = () => setPlaying(prev => !prev)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null
	
	return (
		<div className={styles.videoPreview}>
			<Link href={link}>
				<div
					// onClick={() => togglePlay()}
				>
					<ReactPlayer autoplay muted loop playing={playing} url={src} width={'100%'} height={'100%'} />
				</div>
			</Link>
			{/* {
				link ? 
				<div className={styles.controls}>
					<div className={styles.togglePlay} onClick={() => togglePlay()}>
						{
							playing ? 
							<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5V10.5C3 11.3284 2.32843 12 1.5 12C0.671573 12 0 11.3284 0 10.5V1.5Z" fill="white"/>
								<path d="M7 1.5C7 0.671573 7.67157 0 8.5 0C9.32843 0 10 0.671573 10 1.5V10.5C10 11.3284 9.32843 12 8.5 12C7.67157 12 7 11.3284 7 10.5V1.5Z" fill="white"/>
							</svg>
							:
							<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.602147 0.110932C0.783865 0.0267175 0.987876 -0.0107474 1.19173 0.00265949C1.39558 0.0160664 1.59137 0.0798257 1.75756 0.186921L9.53435 5.18619C9.67837 5.27868 9.79576 5.40079 9.87675 5.54235C9.95775 5.68391 10 5.84084 10 6.00007C10 6.1593 9.95775 6.31622 9.87675 6.45779C9.79576 6.59935 9.67837 6.72146 9.53435 6.81395L1.75756 11.8132C1.59143 11.9202 1.39573 11.9839 1.19199 11.9973C0.988239 12.0107 0.784328 11.9733 0.602673 11.8892C0.421018 11.8051 0.268652 11.6775 0.162327 11.5205C0.0560021 11.3635 -0.000165163 11.1832 6.09748e-07 10.9993V1.0008C-0.000213332 0.816994 0.0558758 0.63669 0.162105 0.479701C0.268334 0.322713 0.420591 0.195116 0.602147 0.110932Z" fill="white"/>
							</svg>
						}
						<div className={styles.divider} />
					</div>
					<div className={styles.link}>
						<Link href={link.href}>{link.name}</Link>
					</div>
				</div>
				:
				<div className={styles.soloPlay} onClick={() => togglePlay()}>
					{
						playing ? 
						<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5V10.5C3 11.3284 2.32843 12 1.5 12C0.671573 12 0 11.3284 0 10.5V1.5Z" fill="white"/>
							<path d="M7 1.5C7 0.671573 7.67157 0 8.5 0C9.32843 0 10 0.671573 10 1.5V10.5C10 11.3284 9.32843 12 8.5 12C7.67157 12 7 11.3284 7 10.5V1.5Z" fill="white"/>
						</svg>
						:
						<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.602147 0.110932C0.783865 0.0267175 0.987876 -0.0107474 1.19173 0.00265949C1.39558 0.0160664 1.59137 0.0798257 1.75756 0.186921L9.53435 5.18619C9.67837 5.27868 9.79576 5.40079 9.87675 5.54235C9.95775 5.68391 10 5.84084 10 6.00007C10 6.1593 9.95775 6.31622 9.87675 6.45779C9.79576 6.59935 9.67837 6.72146 9.53435 6.81395L1.75756 11.8132C1.59143 11.9202 1.39573 11.9839 1.19199 11.9973C0.988239 12.0107 0.784328 11.9733 0.602673 11.8892C0.421018 11.8051 0.268652 11.6775 0.162327 11.5205C0.0560021 11.3635 -0.000165163 11.1832 6.09748e-07 10.9993V1.0008C-0.000213332 0.816994 0.0558758 0.63669 0.162105 0.479701C0.268334 0.322713 0.420591 0.195116 0.602147 0.110932Z" fill="white"/>
						</svg>
					}
				</div>
			}
			 */}
		</div>
	)
}