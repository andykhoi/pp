import { GridLayout } from '../components/GridLayout'
import { VideoPreview } from '../components/VideoPreview'

export default function Work() {
	return (
		<GridLayout>
			<VideoPreview src='/kabu.webm' link='/work/mag'/>
			<VideoPreview src='/wondermapper.webm' link='/work/wondermapper'/>
			<VideoPreview src='/taiki.webm' link='/work/taiki'/>
			<VideoPreview src='/ptpt.webm' link='/work/ptpt'/>
			<VideoPreview src='/ecoharvest.webm' link='/work/ecoharvest'/>
		</GridLayout>
	)
}