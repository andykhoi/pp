import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './ImagePreview.module.css'

interface ImagePreviewProps {
	link?: string,
	src: string,
	blurDataURL: string
}


export const ImagePreview: FC<ImagePreviewProps> = ({
	link = null,
	src,
	blurDataURL
}) => {

	return (
		<div className={styles.imagePreview}>
			{
				link ? 
				<Link href={link}>
					<div className={styles.imageWrap}>
						<Image placeholder='blur' blurDataURL={blurDataURL} quality={50} src={src} alt='Design image' fill/> 
					</div>
				</Link>
				:
				<div className={styles.imageWrap}>
					<Image placeholder='blur' blurDataURL={blurDataURL} quality={50} src={src} alt='Poster image' fill/>
				</div>
			}
		</div>
	)
}