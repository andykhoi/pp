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
			<ProjectNav back={'/for/wollberg-michelson'} />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader thumbnail='/cf_logo.png' alt='Logo for Compassion Fruit' title='Compassion Fruit App Design' />
			<Spacer height='32px' breakpointHeight='56px'/>
			<ImagePreview
				src='/compassion_design.png'
				// link='/for/wollberg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgBXZDNSsNAAIS/7G63TSJNgtUWexB8AC9CQbx48h18QV9C7MGT5x48ClJaaKP405Qkzc+aRNuCH8xlmJ3ZXWsyeTKBp9G6zXL5gVSS0nLoewGfqzWraIbrHqIe7+8Y+oYw0sxeF5xfXJNV4YUxtPwe4fyZ1B6i+t4Z3aMu06TEOTml5QaMH8YUqwWj0RWXN7e4tsZKksSkSczL9J22KjkeDHgLQ3rBAVleYKdzhHZ+g1prNmmCkArLspBSUhPHMXa7RbLJUFmWNebXd4Tve1imYFMUjZfnObEAKSSCP2zHQSmFUHrXWNPRnWZFbQ0pBGVZ8h9Tvb7WPli11Kq8SvsD62jd/O1uOooi6vvWobphS2GZahp+ABBqdciARsaEAAAAAElFTkSuQmCC'
			/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				<b>I was tasked to design an application for Compassion Fruit - a nonprofit finder for young adults.</b>
				<br></br><br></br>
				Compassion Fruit was born out of a struggle for nonprofits to get their mission out and appeal to young adults in the new age of social media.
				<br></br><br></br><br></br>
				<b>User Interviews/Explorations:</b>
			</Text>
			<ImagePreview
				src='/cf_explorations2.png'
				// link='/for/wollberg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgBXZDNSsNAAIS/7G63TSJNgtUWexB8AC9CQbx48h18QV9C7MGT5x48ClJaaKP405Qkzc+aRNuCH8xlmJ3ZXWsyeTKBp9G6zXL5gVSS0nLoewGfqzWraIbrHqIe7+8Y+oYw0sxeF5xfXJNV4YUxtPwe4fyZ1B6i+t4Z3aMu06TEOTml5QaMH8YUqwWj0RWXN7e4tsZKksSkSczL9J22KjkeDHgLQ3rBAVleYKdzhHZ+g1prNmmCkArLspBSUhPHMXa7RbLJUFmWNebXd4Tve1imYFMUjZfnObEAKSSCP2zHQSmFUHrXWNPRnWZFbQ0pBGVZ8h9Tvb7WPli11Kq8SvsD62jd/O1uOooi6vvWobphS2GZahp+ABBqdciARsaEAAAAAElFTkSuQmCC'
			/>
			<Text>
				<em>Feature brainstorming - fundraising for nonprofits can be difficult, we set off to offer nonprofits an easy way to start fundraisers that were exciting and fun</em>
			</Text>
			<Spacer height='12px' breakpointHeight='28px'/>
			<ImagePreview
				src='/cf_explorations.png'
				// link='/for/wollberg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgBXZDNSsNAAIS/7G63TSJNgtUWexB8AC9CQbx48h18QV9C7MGT5x48ClJaaKP405Qkzc+aRNuCH8xlmJ3ZXWsyeTKBp9G6zXL5gVSS0nLoewGfqzWraIbrHqIe7+8Y+oYw0sxeF5xfXJNV4YUxtPwe4fyZ1B6i+t4Z3aMu06TEOTml5QaMH8YUqwWj0RWXN7e4tsZKksSkSczL9J22KjkeDHgLQ3rBAVleYKdzhHZ+g1prNmmCkArLspBSUhPHMXa7RbLJUFmWNebXd4Tve1imYFMUjZfnObEAKSSCP2zHQSmFUHrXWNPRnWZFbQ0pBGVZ8h9Tvb7WPli11Kq8SvsD62jd/O1uOooi6vvWobphS2GZahp+ABBqdciARsaEAAAAAElFTkSuQmCC'
			/>
			<Text>
				<em>Nonprofit profile wireframing - a lot of nonprofit&apos;s have ugly landing pages and we wanted to fix this and create a functional yet beautiful profile where nonprofits could put useful information</em>
				<br></br><br></br>
				Through user interviews of nonprofit organizers we gained insights into the struggles with creating an online presence. <u>There exists no place for nonprofits to create a website that is quick to set up and easily searchable - as well as pleasantly designed.</u>
				<br></br><br></br><br></br>
				<b>Hi-fi Mobile Design:</b>
			</Text>
			<ImagePreview
				src='/cf_mobile.png'
				// link='/for/wollberg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgBXZDNSsNAAIS/7G63TSJNgtUWexB8AC9CQbx48h18QV9C7MGT5x48ClJaaKP405Qkzc+aRNuCH8xlmJ3ZXWsyeTKBp9G6zXL5gVSS0nLoewGfqzWraIbrHqIe7+8Y+oYw0sxeF5xfXJNV4YUxtPwe4fyZ1B6i+t4Z3aMu06TEOTml5QaMH8YUqwWj0RWXN7e4tsZKksSkSczL9J22KjkeDHgLQ3rBAVleYKdzhHZ+g1prNmmCkArLspBSUhPHMXa7RbLJUFmWNebXd4Tve1imYFMUjZfnObEAKSSCP2zHQSmFUHrXWNPRnWZFbQ0pBGVZ8h9Tvb7WPli11Kq8SvsD62jd/O1uOooi6vvWobphS2GZahp+ABBqdciARsaEAAAAAElFTkSuQmCC'
			/>
			<Text>
				<em>Through the discovery process we landed on key features: Overview, Events, Donations, and FAQ. This allowed nonprofits to curate an informational page that offered young adults valuable insight.</em>
				<br></br><br></br>
				The Compassion Fruit design allows for easy onboarding and customization for nonprofits. The profile would have a custom URL that organizations can include in marketing materials.
				<br></br><br></br><br></br>
				<b>Design System:</b>
			</Text>
			<ImagePreview
				src='/cf_system.png'
				// link='/for/wollberg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgBXZDNSsNAAIS/7G63TSJNgtUWexB8AC9CQbx48h18QV9C7MGT5x48ClJaaKP405Qkzc+aRNuCH8xlmJ3ZXWsyeTKBp9G6zXL5gVSS0nLoewGfqzWraIbrHqIe7+8Y+oYw0sxeF5xfXJNV4YUxtPwe4fyZ1B6i+t4Z3aMu06TEOTml5QaMH8YUqwWj0RWXN7e4tsZKksSkSczL9J22KjkeDHgLQ3rBAVleYKdzhHZ+g1prNmmCkArLspBSUhPHMXa7RbLJUFmWNebXd4Tve1imYFMUjZfnObEAKSSCP2zHQSmFUHrXWNPRnWZFbQ0pBGVZ8h9Tvb7WPli11Kq8SvsD62jd/O1uOooi6vvWobphS2GZahp+ABBqdciARsaEAAAAAElFTkSuQmCC'
			/>
			<Text>
				<em>Included is the design system for compassion fruit - this allows developers a systematic way to build and style</em>
			</Text>
			<Spacer height='100px'/>
		</GridLayout>
	)
}