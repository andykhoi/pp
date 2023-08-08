import { ProjectNav, ProjectHeader} from '@/app/components/Projects'
import { GridLayout } from '@/app/components/Grids'
import { VideoPreview } from '@/app/components/VideoPreview'
import { Spacer } from '@/app/components/Spacer.tsx'
import { Text } from '@/app/components/Text'

export default function Mag() {
	return (
		<GridLayout>
			<Spacer height='12px' breakpointHeight='28px'/>
			<ProjectNav back={'/work'} link='https://taikifriends.com' />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader title='Taiki Friends' software={[ 'React', 'NextJS', 'Typescript']}/>
			<Spacer height='32px' breakpointHeight='56px'/>
			<VideoPreview blurDataURL='data:image/png;base64,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' src='/taiki.mp4' poster='/taiki_poster.png'/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				A fun build for an NFT collection, inspired by lo-fi music. Designs by Nathan Pokpongkiat.
				<br/>
				<br/> 
				Built with: NextJS, Typescript, AWS S3, and React
				<br />
				<br />
				Team:
				<br />
				Nathan Pokpongkiat, Me
			</Text>
			<Spacer height='100px'/>
		</GridLayout>
	)
}