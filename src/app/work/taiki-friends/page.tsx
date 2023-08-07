import { ProjectNav, ProjectHeader} from '@/app/components/Projects'
import { GridLayout } from '@/app/components/Grids'
import { VideoPreview } from '@/app/components/VideoPreview'
import { Spacer } from '@/app/components/Spacer.tsx'
import { Text } from '@/app/components/Text'

export default function Mag() {
	return (
		<GridLayout>
			<Spacer height='12px' breakpointHeight='28px'/>
			<ProjectNav link='https://taikifriends.com' />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader title='Taiki Friends' software={[ 'React', 'NextJS', 'Typescript']}/>
			<Spacer height='32px' breakpointHeight='56px'/>
			<VideoPreview src='/taiki.webm'/>
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