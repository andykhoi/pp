import { ProjectNav, ProjectHeader} from '@/app/components/Projects'
import { GridLayout } from '@/app/components/Grids'
import { VideoPreview } from '@/app/components/VideoPreview'
import { Spacer } from '@/app/components/Spacer.tsx'
import { Text } from '@/app/components/Text'

export default function Mag() {
	return (
		<GridLayout>
			<Spacer height='12px' breakpointHeight='28px'/>
			<ProjectNav back={'/work'} link='https://ecoharvest.app' />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader title='Ecoharvest' thumbnail='/ecoharvest.png' alt='Logo for Ecoharvest' software={[ 'React', 'NextJS', 'Typescript', 'Hasura', 'GraphQL', 'Mapbox', 'Clerk']}/>
			<Spacer height='32px' breakpointHeight='56px'/>
			<VideoPreview src='/ecoharvest.mp4' poster='/ecoharvest_poster.png'/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				Ecoharvest is a biodiversity tracker for ranchers to utilize as a log to apply for government environmental credits. Pin pointing where biodiversity exists on their land while learning about the biodiversity that exists with a specialized data set of plants, animals, and insects.
				<br/>
				<br/> 
				My responsibilities for this project:
				<br />
				<ul>
					<li>
						Profile page, GraphQL, react components
					</li>
					<li>
						Species pages, react components
					</li>
					<li>
						Authentication with ClerkJS
					</li>
					<li>
						Media upload functionality, AWS S3
					</li>
				</ul>
				<br />
				Team:
				<br />
				Austin Arrington, Dan Casson, John Vu, Nicholas von Holtermann, Me
			</Text>
			<Spacer height='100px'/>
		</GridLayout>
	)
}