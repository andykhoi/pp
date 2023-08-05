// import Image from 'next/image'
// import styles from './home.module.css'
// import { HomeHeader } from './components/HomeHeader'
// import { Description } from './components/Description'
// import { Previews } from './components/Previews'
// import { VideoPreview } from './components/VideoPreview'
// import { Text } from './components/Text'
// import { Spacer } from './components/Spacer'
// import Link from 'next/link'
import { GridLayout } from './components/Grids'
import { TitleSequence } from './components/TitleSequence'

export default function Home() {
  return (
	<GridLayout
		// rowTemplate='100%'
		height='100%'
	>
		<TitleSequence />
	</GridLayout>
  )
}
