import { ProjectNav, ProjectHeader} from '@/app/components/Projects'
import { GridLayout } from '@/app/components/Grids'
import { VideoPreview } from '@/app/components/VideoPreview'
import { Spacer } from '@/app/components/Spacer.tsx'
import { Text } from '@/app/components/Text'

export default function Mag() {
	return (
		<GridLayout>
			<Spacer height='12px' breakpointHeight='28px'/>
			<ProjectNav link='https://maps.productions.wondermapper.com/wonder-california' />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader thumbnail='/wondermapper.png' alt='Wonder Mapper logo' title='Wonder Mapper' software={[ 'React', 'Sanity', 'mapbox-gl-js', 'Typescript']}/>
			<Spacer height='32px' breakpointHeight='56px'/>
			<VideoPreview src='/wondermapper.webm'/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				Wonder California is an interactive map showcasing the beautiful, diverse landscapes that exist in California. Scenes shot by Adam Ouellette and John Vu.
				<br/>
				<br/> 
				My responsibilities for this project:
				<ul>
					<li>
						Sanity geojson visualizer plugin
					</li>
					<li>
						Explore module components built with React		
					</li>
					<li>
						Map interactions & styling, JS handlers controlling map bounding box and initializing Mapbox layers & sources
					</li>
				</ul>
				<br />
				Team:
				<br />
				John Vu, Adam Ouellette, Me
			</Text>
			<Spacer height='100px'/>
		</GridLayout>
	)
}