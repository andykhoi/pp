import { GridLayout } from '../components/Grids'
import { VideoPreview } from '../components/VideoPreview'
import { Spacer } from '../components/Spacer.tsx'
import { ProjectNav } from '../components/Projects'
export default function Work() {
	return (
		<GridLayout>
			{/* <Spacer height='12px' breakpointHeight='28px' />
			<ProjectNav back={'/'} /> */}
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/kabu.mp4' link='/work/mag' poster='/kabu_poster.png'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/wondermapper.mp4' link='/work/wondermapper' poster='/wondermapper_poster.png'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/taiki.mp4' link='/work/taiki-friends' poster='/taiki_poster.png'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/ptpt.mp4' link='/work/ptpt' poster='/ptpt_poster.png'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/ecoharvest.mp4' link='/work/ecoharvest' poster='/ecoharvest_poster.png'/>
			<Spacer height='69px' breakpointHeight='28px' />
		</GridLayout>
	)
}