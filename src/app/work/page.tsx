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
			<VideoPreview src='/kabu.mp4' link='/work/mag'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/wondermapper.mp4' link='/work/wondermapper'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/taiki.mp4' link='/work/taiki-friends'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/ptpt.mp4' link='/work/ptpt'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/ecoharvest.mp4' link='/work/ecoharvest'/>
			<Spacer height='69px' breakpointHeight='28px' />
		</GridLayout>
	)
}