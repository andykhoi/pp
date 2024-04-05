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
			<ProjectNav back={'/for/onestepgps'} />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader thumbnail='/andymag.png' alt='Logo for Andy Mag' title='Magnolia Dashboard Design' />
			<Spacer height='32px' breakpointHeight='56px'/>
			<ImagePreview
				src='/am_landing.png'
				// link='/for/onestepgps/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFfSURBVHgBbYtLLythAIafqc8x0zYtrTo9MonjEiJ0oRsbcV0IIrGX+BMiYiVi6zdY2IvE1i9wjUvckmrVuEw0CJ0ZnRnTUQtWnjd5N+/7SMsLs36iUSXsWrhOCc1y8f0ygUAV+wfHjA73c3B4RKD09khdOEiPU8TInSFZBUpGgUzukpo/0JfupCkRroi+g6mfcNuUJBT3Ea8PtIdc0motrvdB4a2IUwaxtXfBODa2nq0ck3Skk6gRhea/UfQiRBtaCNVfI+Zn52hva+V/YwOG9c6LZRMNyhiOgxJ7JKJUUxsJIRQliKqqeFTsWJi7wjm3p9t41TK2XWJzbZXTrIZYWVpEdt75J6oYmJ4hNTiC/+GRy2d4eXqmv7cL7dVEdHanaIvLSF6Zmng9iXiMut4ROiQJc32D1NAYOkHE8PgEU5MT/IasKF9FTssjdg93yOuZn1Gq5Jvs1T3azTWmafAJHCmF65/FjlMAAAAASUVORK5CYII='
			/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				<b>I was tasked to design the dashboard for Andy Mag - specifically for the Magnolia art issue.</b>
				<br></br><br></br>
				This was a from-the-ground-up design - the problem we were solving was the outdated experience of legacy publications.
				<br></br><br></br>
				How should articles be displayed? How should articles be read? What would be the structure of the publication?
				<br></br><br></br><br></br><br></br>
				<b>Initial Wireframes:</b>
			</Text>
			<ImagePreview
				src='/am_wireframes1.png'
				// link='/for/onestepgps/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFfSURBVHgBbYtLLythAIafqc8x0zYtrTo9MonjEiJ0oRsbcV0IIrGX+BMiYiVi6zdY2IvE1i9wjUvckmrVuEw0CJ0ZnRnTUQtWnjd5N+/7SMsLs36iUSXsWrhOCc1y8f0ygUAV+wfHjA73c3B4RKD09khdOEiPU8TInSFZBUpGgUzukpo/0JfupCkRroi+g6mfcNuUJBT3Ea8PtIdc0motrvdB4a2IUwaxtXfBODa2nq0ck3Skk6gRhea/UfQiRBtaCNVfI+Zn52hva+V/YwOG9c6LZRMNyhiOgxJ7JKJUUxsJIRQliKqqeFTsWJi7wjm3p9t41TK2XWJzbZXTrIZYWVpEdt75J6oYmJ4hNTiC/+GRy2d4eXqmv7cL7dVEdHanaIvLSF6Zmng9iXiMut4ROiQJc32D1NAYOkHE8PgEU5MT/IasKF9FTssjdg93yOuZn1Gq5Jvs1T3azTWmafAJHCmF65/FjlMAAAAASUVORK5CYII='
			/>
			<Text>
				<em>We started with the premise of a video game - video games are entertaining and fun, in contrast to the boring interfaces of legacy publications</em>
				<br></br><br></br><br></br><br></br>
				<b>Pathfinding Userflows/User Interviews:</b>
			</Text>
			<ImagePreview
				src='/am_userflows.png'
				// link='/for/onestepgps/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEFSURBVHgBjZAxS4QAFMd/mpqo6FRDREPpeNDW7U1OfYYOmlrag76BHNFWQ1NDJCRtR40ROgTRFjdEkSDXEAqCYXqlQcRdQz94PN57f3j/94Q4jsf8A+l3EUUR18UMs4KM+S6ysbaCZWrfwrquEUWxLZIkYfiSIlew+CFylT7RPzygt9lDMgyDPM/RdR1VVXmNAtaLN1a3tllwHHb1HWzbRgrDsF3Z8OWX4e0N2tw8j4MBe90uruu2M1FRFKqqorHQ5KIcczcacR4EZFnG8dkF9w/PCJNXN8M0TbEsC9M0Odrv43Q600LP8zg9uWRp2cD3/Z/+lLAsyzYaNE37+48Nsiy3Mckn1Mxpy6GR4PsAAAAASUVORK5CYII='
			/>
			<Text>
				<em>User interviews were conducted to understand more deeply the interaction of readers and publications</em>
				<br></br><br></br>
				Insights we gained through user interviews: <u>a want for social experience, a disconnect of content to reader interest, ads getting in the way</u>.
				<br></br><br></br>
				These major insights informed many UX decisions throughout this process.
				<br></br><br></br><br></br><br></br>
				<b>High Fidelity Desktop and Mobile Prototyping:</b> 
			</Text>
			<ImagePreview
				src='/am_hifi.png'
				// link='/for/onestepgps/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEFSURBVHgBjZAxS4QAFMd/mpqo6FRDREPpeNDW7U1OfYYOmlrag76BHNFWQ1NDJCRtR40ROgTRFjdEkSDXEAqCYXqlQcRdQz94PN57f3j/94Q4jsf8A+l3EUUR18UMs4KM+S6ysbaCZWrfwrquEUWxLZIkYfiSIlew+CFylT7RPzygt9lDMgyDPM/RdR1VVXmNAtaLN1a3tllwHHb1HWzbRgrDsF3Z8OWX4e0N2tw8j4MBe90uruu2M1FRFKqqorHQ5KIcczcacR4EZFnG8dkF9w/PCJNXN8M0TbEsC9M0Odrv43Q600LP8zg9uWRp2cD3/Z/+lLAsyzYaNE37+48Nsiy3Mckn1Mxpy6GR4PsAAAAASUVORK5CYII='
			/>
			<Text>
				<em>Maturing the dashboard design required content that was created over the course of a year</em>
				<br></br><br></br>
				Magnolia is a five article issue that focuses on art and the artists themselves. It utilizes the web browser as a medium for storytelling, giving storytellers a fresh and better way to connect with their readers.
			</Text>
			<Spacer height='100px'/>
		</GridLayout>
	)
}