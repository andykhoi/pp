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
			<ProjectNav back={'/for/wollborg-michelson'} link='https://steepla.com/' />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader thumbnail='/steep_logo.png' alt='Logo for Steep LA' title='Designs for Steep Los Angeles' />
			<Spacer height='32px' breakpointHeight='56px'/>
			<ImagePreview
				src='/steep_design.png'
				// link='/for/wollborg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFfSURBVHgBbYtLLythAIafqc8x0zYtrTo9MonjEiJ0oRsbcV0IIrGX+BMiYiVi6zdY2IvE1i9wjUvckmrVuEw0CJ0ZnRnTUQtWnjd5N+/7SMsLs36iUSXsWrhOCc1y8f0ygUAV+wfHjA73c3B4RKD09khdOEiPU8TInSFZBUpGgUzukpo/0JfupCkRroi+g6mfcNuUJBT3Ea8PtIdc0motrvdB4a2IUwaxtXfBODa2nq0ck3Skk6gRhea/UfQiRBtaCNVfI+Zn52hva+V/YwOG9c6LZRMNyhiOgxJ7JKJUUxsJIRQliKqqeFTsWJi7wjm3p9t41TK2XWJzbZXTrIZYWVpEdt75J6oYmJ4hNTiC/+GRy2d4eXqmv7cL7dVEdHanaIvLSF6Zmng9iXiMut4ROiQJc32D1NAYOkHE8PgEU5MT/IasKF9FTssjdg93yOuZn1Gq5Jvs1T3azTWmafAJHCmF65/FjlMAAAAASUVORK5CYII='
			/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				<b>I was tasked to fully redesign Steep LA&apos;s e-commerce site.</b>
				<br></br><br></br>
				I began with the brand&apos;s first principles of <u>tea & community</u> - and wanted to include a level of interactivity to create a storyline for users.
				<br></br><br></br>	
				<b>Initial Wireframes:</b>
			</Text>
			<ImagePreview
				src='/steep_wireframes.png'
				// link='/for/wollborg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADkSURBVHgBjVBrykVQFF2Ot5DIq8QAyD+/Te2bmQmYhK/oXkoUSl63c0Zg1961X2uvvbg4jh+8MCGKIoRhiOu6ME0TXNfFcRxYlgWWZbF613UQ8jxHmqZo2xa6rrNG0zTIsgxFUeC+b1RVBWEYBtR1DUII+r7Htm3QNA2iKGKeZyiKgud5QAzDgOd52PedUSjLEkEQ4DxP+L4PSZLYoECRkiSB4zjgOI45Xfx+vuB5HqqqsppAgyzLjCNFofk4jowCRVrXlV3jbdv+o1umaYLypY9QJWhzvQj240Hz34B7qyPBS/sBo8Bp2O5FGH8AAAAASUVORK5CYII='
			/>
			<Text>
				<em>Steep had a plethora of unused, high-quality image assets that showcased their tearoom and events - an immediate showcase of this would give users a feel for the brand and purpose.</em>
				<br></br><br></br><br></br>
				<b>Building User Flow:</b>
			</Text>
			<ImagePreview
				src='/steep_wireframes2.png'
				// link='/for/wollborg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBZZA7TgNBEETf7Jf9eW1sQURCYASIDBIkcsQBkJwSkCCOwAUQV+AEnIKYkIQECQn5AzIGhD+a9Y6HmSUz1UFNSzXd1SV2d7Z1Xst4G36w3mqiTTmOiyFeuz2SJKEoCry9rU0uzzpc397ROTmikUUsFoqyhIurG85Pj7l/eMQL4ozvAvI8R8QNdBig5gvGsy8spoQopfE8odlYayLLAreUpGFGkPo087QSRlGA7wi8UinjyaE/6GO9ZmlieoEti6fnF7rDkVnt+7hGKKU04z2UcPmZSsq5rISHB/uMhp84LKGUM1yhkLNp1YcmgCSJ8ZaFcRT9cRhW3KrXSVZW/gutDWuvYgPr375Fu93Wq/VaFXhsftpjxpMJqQm6N3inlqVorfkFBfpdYyupt1EAAAAASUVORK5CYII='
			/>
			<Text>
				<em>Through interviews with the client - it was important to emphasize the retail aspect of the tea shop - teawares and teas were available to be purchased online.</em>
				<br></br><br></br>
				User flow progressed to: <b>Gallery &gt; About &gt; Menu &gt; Shop</b>
				<br></br><br></br><br></br>
				<b>High Fidelity Prototyping for Desktop and Mobile:</b>
			</Text>
			<ImagePreview
				src='/steep_hifi.png'
				// link='/for/wollborg-michelson/design-steep'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBZZA7TgNBEETf7Jf9eW1sQURCYASIDBIkcsQBkJwSkCCOwAUQV+AEnIKYkIQECQn5AzIGhD+a9Y6HmSUz1UFNSzXd1SV2d7Z1Xst4G36w3mqiTTmOiyFeuz2SJKEoCry9rU0uzzpc397ROTmikUUsFoqyhIurG85Pj7l/eMQL4ozvAvI8R8QNdBig5gvGsy8spoQopfE8odlYayLLAreUpGFGkPo087QSRlGA7wi8UinjyaE/6GO9ZmlieoEti6fnF7rDkVnt+7hGKKU04z2UcPmZSsq5rISHB/uMhp84LKGUM1yhkLNp1YcmgCSJ8ZaFcRT9cRhW3KrXSVZW/gutDWuvYgPr375Fu93Wq/VaFXhsftpjxpMJqQm6N3inlqVorfkFBfpdYyupt1EAAAAASUVORK5CYII='
			/>
			<Text>
				<em>The redesign included a new landing and new After Dark page - their signature bar series during the evening. The project was delivered in February and is now live.</em>
			</Text>
			<Spacer height='100px'/>
		</GridLayout>
	)
}