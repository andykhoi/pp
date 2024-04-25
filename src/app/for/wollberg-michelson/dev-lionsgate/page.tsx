import { ProjectNav, ProjectHeader} from '@/app/components/Projects'
import { GridLayout } from '@/app/components/Grids'
import { VideoPreview } from '@/app/components/VideoPreview'
import { Spacer } from '@/app/components/Spacer'
import { Text } from '@/app/components/Text'

export default function Mag() {
	return (
		<GridLayout>
			<Spacer height='12px' breakpointHeight='28px'/>
			<ProjectNav back={'/for/wollberg-michelson'} link='https://inclusionbycsi.com/' />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader thumbnail='/lionsgate_logo-2.png' alt='Logo for Lionsgate CSI' title='Lionsgate' software={[ 'Webflow','React', 'JavaScript', 'AWS (Lambda + API Gateway)', 'Typeform']}/>
			<Spacer height='32px' breakpointHeight='56px'/>
			<VideoPreview 
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB/SURBVHgBrVAxDgIgDLwKwYEXuPFDvsRDGPgKJIyOMqC0CtFBEw2Dl9zSXi+9IwCCDRywCR1jxBgDxpg1YGaICJRS4OsZfLtAH0+g3rs8iNYarLUgonU0hW+OtVaEEJbT5/IF7z2QUpJnoK+cmq0w82ddSoFz7qcw5wzCv3u8A/Z+PUG0azWIAAAAAElFTkSuQmCC'
				src='/lionsgate.mp4'
				poster='/lionsgate_poster.png'
			/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				<b>I was contracted by Lionsgate to build an inclusivity quiz for scriptwriters.</b>
				<br></br><br></br>
				This site was built on webflow utilizing a script to inject a react bundle that was hosted in an AWS S3 bucket. The React components utiized typeform&apos;s Responses API to retrieve response data and visualize it to give quiz takers a grade on their script.
			</Text>
			<Spacer height='100px'/>
		</GridLayout>
	)
}