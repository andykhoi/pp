import { ProjectNav, ProjectHeader} from '@/app/components/Projects'
import { GridLayout } from '@/app/components/Grids'
import { VideoPreview } from '@/app/components/VideoPreview'
import { Spacer } from '@/app/components/Spacer'
import { Text } from '@/app/components/Text'
import { ImagePreview } from '@/app/components/ImagePreview'

export default function Mag() {
	return (
		<GridLayout>
			<Spacer height='12px' breakpointHeight='28px'/>
			<ProjectNav back={'/for/onestepgps'}/>
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader thumbnail='/andymag.png' alt='Logo for Andy Mag' title='Kabu Article Design' />
			<Spacer height='32px' breakpointHeight='56px'/>
			<ImagePreview
				src='/kabu_design-1.png'
				// link='/for/onestepgps/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgBTZDLSsNAGIW/JNNcTLUxVVNDpdKCiiC46zv43K5cKbgTXYiIlqI0aZo0tzETiXiY65kzP+f82vjsSqa9fXRNoxnNbBZoz718hbGNQIIwdPAGNkfHJxz0LVxT8hEVrTiOVnjDIcniDVEn30TLZ24m1wQ7LmUN85HGw8uSx8WG+fSS102CdjEL5a6VcepbPC0yLKExO7T4SiU7tk1PKzGEgxaGocyyDM/zEEJQVRVFUbBerzFNE7fvUlc1Qj0oKLEKUpYldV23nJSSJiJ5nqPzD7qut1XU3kGJ1f2PcRwH3/dbsmtR99EwDEQnHE/PGY0nyFqy/Hzn/u62tRDH8a+FIAikMu8N9hrTBaZtsU23xEnahlMVlfAHOzN0g0WsWKAAAAAASUVORK5CYII='
			/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				<b>I was tasked with designing the Kabu article for the Andy Mag Magnolia issue.</b>
				<br></br><br></br>
				Kabu is a piece connecting art history&apos;s representation of animals to our civilization&apos;s attitude towards animal & human relationships.
				<br></br><br></br>
				This piece was written by two authors and we sought a design that highlighted each of their passages and represented them accurately visually.
				<br></br><br></br><br></br>
				<b>Initial Wireframes:</b>
			</Text>
			<ImagePreview
				src='/kabu_wireframe1.png'
				// link='/for/onestepgps/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgBTZDLSsNAGIW/JNNcTLUxVVNDpdKCiiC46zv43K5cKbgTXYiIlqI0aZo0tzETiXiY65kzP+f82vjsSqa9fXRNoxnNbBZoz718hbGNQIIwdPAGNkfHJxz0LVxT8hEVrTiOVnjDIcniDVEn30TLZ24m1wQ7LmUN85HGw8uSx8WG+fSS102CdjEL5a6VcepbPC0yLKExO7T4SiU7tk1PKzGEgxaGocyyDM/zEEJQVRVFUbBerzFNE7fvUlc1Qj0oKLEKUpYldV23nJSSJiJ5nqPzD7qut1XU3kGJ1f2PcRwH3/dbsmtR99EwDEQnHE/PGY0nyFqy/Hzn/u62tRDH8a+FIAikMu8N9hrTBaZtsU23xEnahlMVlfAHOzN0g0WsWKAAAAAASUVORK5CYII='
			/>
			<Text>
				<em>How should we connect the authors to the piece? What fonts and what colors should we use? As a written piece a lot of UX decisions to make to preserve the integrity and meaning of the author&apos;s words.</em>
				<br></br><br></br>
				This article contained a lot of references to art pieces throughout the renaissance era up to modern times. It felt like an art gallery and so we wanted to give readers an immersive experience, like walking through the gallery itself.
				<br></br><br></br><br></br>
				<b>User Flow:</b>
			</Text>
			<ImagePreview
				src='/kabu_wireframes2.png'
				// link='/for/onestepgps/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgBTZDLSsNAGIW/JNNcTLUxVVNDpdKCiiC46zv43K5cKbgTXYiIlqI0aZo0tzETiXiY65kzP+f82vjsSqa9fXRNoxnNbBZoz718hbGNQIIwdPAGNkfHJxz0LVxT8hEVrTiOVnjDIcniDVEn30TLZ24m1wQ7LmUN85HGw8uSx8WG+fSS102CdjEL5a6VcepbPC0yLKExO7T4SiU7tk1PKzGEgxaGocyyDM/zEEJQVRVFUbBerzFNE7fvUlc1Qj0oKLEKUpYldV23nJSSJiJ5nqPzD7qut1XU3kGJ1f2PcRwH3/dbsmtR99EwDEQnHE/PGY0nyFqy/Hzn/u62tRDH8a+FIAikMu8N9hrTBaZtsU23xEnahlMVlfAHOzN0g0WsWKAAAAAASUVORK5CYII='
			/>
			<Text>
				<em>References to art pieces allowed us to include visual elements that gives the reader an experience of understanding the author&apos;s point of view.</em>
				<br></br><br></br>
				Each article in Andy Mag has metadata that the user can specify such as font size and a collapsing header. These options are stored in a side panel that the user can open. This customizability gives readers more control over the way they read and can tailor their experience to their preferences. 
				<br></br><br></br><br></br>
				<b>High-fidelity Protoyping:</b>
			</Text>
			<ImagePreview
				src='/kabu_hifi.png'
				// link='/for/onestepgps/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgBTZDLSsNAGIW/JNNcTLUxVVNDpdKCiiC46zv43K5cKbgTXYiIlqI0aZo0tzETiXiY65kzP+f82vjsSqa9fXRNoxnNbBZoz718hbGNQIIwdPAGNkfHJxz0LVxT8hEVrTiOVnjDIcniDVEn30TLZ24m1wQ7LmUN85HGw8uSx8WG+fSS102CdjEL5a6VcepbPC0yLKExO7T4SiU7tk1PKzGEgxaGocyyDM/zEEJQVRVFUbBerzFNE7fvUlc1Qj0oKLEKUpYldV23nJSSJiJ5nqPzD7qut1XU3kGJ1f2PcRwH3/dbsmtR99EwDEQnHE/PGY0nyFqy/Hzn/u62tRDH8a+FIAikMu8N9hrTBaZtsU23xEnahlMVlfAHOzN0g0WsWKAAAAAASUVORK5CYII='
			/>
			<Spacer height='100px'/>
		</GridLayout>
	)
}