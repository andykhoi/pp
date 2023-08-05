import { ProjectNav, ProjectHeader} from '@/app/components/Projects'
import { GridLayout } from '@/app/components/Grids'
import { VideoPreview } from '@/app/components/VideoPreview'
import { Spacer } from '@/app/components/Spacer.tsx'
import { Text } from '@/app/components/Text'

export default function Mag() {
	return (
		<GridLayout>
			<Spacer height='12px' breakpointHeight='28px'/>
			<ProjectNav link='https://www.theandymag.com' />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader title='Andy Mag' thumbnail='/andymag.png' alt='Logo for Andy Mag' software={[ 'React', 'Typescript', 'NextJS', 'Hasura', 'GraphQL', 'AWS Lambda', 'Clerk', 'Figma']}/>
			<Spacer height='32px' breakpointHeight='56px'/>
			<VideoPreview src='/kabu.webm'/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>This planting tool is a cost estimator for tree rows and prairies of crops that integrates SSURGO data to identify the trees or crops best suited for the soil.</Text>
		</GridLayout>
	)
}