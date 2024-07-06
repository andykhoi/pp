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
			<ProjectNav back={'/for/xona'} />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader thumbnail='/andymag.png' alt='Logo for Andy Mag' title='Fleeting But Not Fleeting Podcast Design' />
			<Spacer height='32px' breakpointHeight='56px'/>
			<ImagePreview
				src='/dafna_design.png'
				// link='/for/wollborg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBTY9LS8NAFIW/TCZpxyClm7gQQQQVXCiF9m/qzl8iuPexE9xIQJR2J2iMUEmaZvIYJ+kD72bmHs7jHufy6trc3D4wcH2GfcO3/iLVfUAyHl/wFj1xPpogoyji8f4OKTx2leEwMDx/ZuAGDIcD5tE7cbiHwDE4qqZsFhwdDBgdn3KyHyAdjYvmVy6wHkhTF+h5gnAcXqcp09mUn3xJU4MjKl5mH5xNcoTWhQU1Svk0wmdpfVR/h6oqKfWSMAzp9XqIurbS9SilLKEiy7Itluc5ruvaausxxhDHcfdvmqZ7W1FRFB1ZbIgt6HneKkas4NbJ9/1OuHUMAttUSjanpGnaCVq8JYv/0Y5t3kaVZbk9IUmSbv8D/iOEy+3SDZoAAAAASUVORK5CYII='
			/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				<b>I was tasked to design the podcast created by Dafna Margalit, a singer-songwriter based in Los Angeles.</b>
				<br></br><br></br>
				Fleeting But Not Fleeting is a comedic and light-hearted podcast about a 4 day relationship. We wanted to create an interface that allowed the podcast format to shine while also giving users a visual aid to guide them through the audio.
				<br></br><br></br><br></br>
				<b>Initial Wireframes:</b>
			</Text>
			<ImagePreview
				src='/dafna_wireframe1.png'
				// link='/for/wollborg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBTY9LS8NAFIW/TCZpxyClm7gQQQQVXCiF9m/qzl8iuPexE9xIQJR2J2iMUEmaZvIYJ+kD72bmHs7jHufy6trc3D4wcH2GfcO3/iLVfUAyHl/wFj1xPpogoyji8f4OKTx2leEwMDx/ZuAGDIcD5tE7cbiHwDE4qqZsFhwdDBgdn3KyHyAdjYvmVy6wHkhTF+h5gnAcXqcp09mUn3xJU4MjKl5mH5xNcoTWhQU1Svk0wmdpfVR/h6oqKfWSMAzp9XqIurbS9SilLKEiy7Itluc5ruvaausxxhDHcfdvmqZ7W1FRFB1ZbIgt6HneKkas4NbJ9/1OuHUMAttUSjanpGnaCVq8JYv/0Y5t3kaVZbk9IUmSbv8D/iOEy+3SDZoAAAAASUVORK5CYII='
			/>
			<Text>
				<em>Creating an interface for a podcast was a unique UX challenge. How do we take a audio only format and make a visual representation that complements the experience of listening?</em>
				<br></br><br></br>
				We approached this in a few ways - primarily thinking about what will the user be interacting with? As a audio only format a player would be important to control audio timestamps, press play, and pause the audio. A transcript was also important to the experience, especially for accessibility. 
				<br></br><br></br><br></br>
				<b>Testing User Flows:</b>
			</Text>
			<ImagePreview
				src='/dafna_userflow.png'
				// link='/for/wollborg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBTY9LS8NAFIW/TCZpxyClm7gQQQQVXCiF9m/qzl8iuPexE9xIQJR2J2iMUEmaZvIYJ+kD72bmHs7jHufy6trc3D4wcH2GfcO3/iLVfUAyHl/wFj1xPpogoyji8f4OKTx2leEwMDx/ZuAGDIcD5tE7cbiHwDE4qqZsFhwdDBgdn3KyHyAdjYvmVy6wHkhTF+h5gnAcXqcp09mUn3xJU4MjKl5mH5xNcoTWhQU1Svk0wmdpfVR/h6oqKfWSMAzp9XqIurbS9SilLKEiy7Itluc5ruvaausxxhDHcfdvmqZ7W1FRFB1ZbIgt6HneKkas4NbJ9/1OuHUMAttUSjanpGnaCVq8JYv/0Y5t3kaVZbk9IUmSbv8D/iOEy+3SDZoAAAAASUVORK5CYII='
			/>
			<Text>
				<em>Here we are introducing the transcript and what form it would take. Would it be line by line like subtitles in a movie? Would it simply be a long block of text?</em>
				<br></br><br></br>
				Through this experimentation process it was important to give users a simple interface. To compliment the audio and not take away the easy experience of simply listening. 
				<br></br><br></br><br></br>
				<b>High-fidelity Prototyping:</b>
			</Text>
			<ImagePreview
				src='/dafna_hifi.png'
				// link='/for/wollborg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBTY9LS8NAFIW/TCZpxyClm7gQQQQVXCiF9m/qzl8iuPexE9xIQJR2J2iMUEmaZvIYJ+kD72bmHs7jHufy6trc3D4wcH2GfcO3/iLVfUAyHl/wFj1xPpogoyji8f4OKTx2leEwMDx/ZuAGDIcD5tE7cbiHwDE4qqZsFhwdDBgdn3KyHyAdjYvmVy6wHkhTF+h5gnAcXqcp09mUn3xJU4MjKl5mH5xNcoTWhQU1Svk0wmdpfVR/h6oqKfWSMAzp9XqIurbS9SilLKEiy7Itluc5ruvaausxxhDHcfdvmqZ7W1FRFB1ZbIgt6HneKkas4NbJ9/1OuHUMAttUSjanpGnaCVq8JYv/0Y5t3kaVZbk9IUmSbv8D/iOEy+3SDZoAAAAASUVORK5CYII='
			/>
			<Text>
				<em>The sweet spot was a mix of everything. A capturing cover, a sleek audio player, and an auto scrolling transcript that synced to the audio.</em>
			</Text>
			<Spacer height='100px'/>
		</GridLayout>
	)
}