import { ProjectNav, ProjectHeader} from '@/app/components/Projects'
import { GridLayout } from '@/app/components/Grids'
import { VideoPreview } from '@/app/components/VideoPreview'
import { Spacer } from '@/app/components/Spacer.tsx'
import { Text } from '@/app/components/Text'

export default function Mag() {
	return (
		<GridLayout>
			<Spacer height='12px' breakpointHeight='28px'/>
			<ProjectNav link='https://ptpt.nrem.iastate.edu/#welcome' />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader title='Prairie Tree and Planting Tool' software={[ 'React', 'mapbox-gl-js', 'mapbox-gl-draw']}/>
			<Spacer height='32px' breakpointHeight='56px'/>
			<VideoPreview src='/ptpt.webm'/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				This planting tool is a cost estimator for tree rows and prairies of crops that integrates SSURGO data to identify the trees or crops best suited for the soil.
				<br/>
				<br/> 
				My responsibilities for this project:
				<ul>
					<li>
						Building cost estimator with calculation logic based off client data
					</li>
					<li>
						Tree and prairie configurator forms, react components					
					</li>
					<li>
						Map interactions, building logic for handlers					
					</li>
				</ul>
				<br />
				Team:
				<br />
				John Vu, Me
			</Text>
			<Spacer height='100px'/>
		</GridLayout>
	)
}