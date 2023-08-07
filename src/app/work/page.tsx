import { GridLayout } from '../components/Grids'
import { VideoPreview } from '../components/VideoPreview'
import { Spacer } from '../components/Spacer.tsx'
export default function Work() {
	return (
		<GridLayout>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/kabu.webm' link='/work/mag'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/wondermapper.webm' link='/work/wondermapper'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/taiki.webm' link='/work/taiki-friends'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/ptpt.webm' link='/work/ptpt'/>
			<Spacer height='12px' breakpointHeight='28px' />
			<VideoPreview src='/ecoharvest.webm' link='/work/ecoharvest'/>
			<Spacer height='69px' breakpointHeight='28px' />
		</GridLayout>
	)
}