import { ProjectNav, ProjectHeader} from '@/app/components/Projects'
import { GridLayout } from '@/app/components/Grids'
import { VideoPreview } from '@/app/components/VideoPreview'
import { Spacer } from '@/app/components/Spacer.tsx'
import { Text } from '@/app/components/Text'

export default function Mag() {
	return (
		<GridLayout>
			<Spacer height='12px' breakpointHeight='28px'/>
			<ProjectNav back='/work' link='https://www.theandymag.com' />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader title='Andy Mag' thumbnail='/andymag.png' alt='Logo for Andy Mag' software={[ 'React', 'Typescript', 'NextJS', 'Hasura', 'GraphQL', 'AWS Lambda', 'Clerk', 'Figma']}/>
			<Spacer height='32px' breakpointHeight='56px'/>
			<VideoPreview src='/kabu.mp4' poster='/kabu_poster.png'/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				Andy Mag is a digital magazine creating a space for storytellers of all kinds. <em>Magnolia</em> is the name of our first issue, we have 5 articles: <br/><br/> 
				<strong>What Is Art?</strong>
				<br/>
				A series of 15 videos of artists around the world — Answering the question: What is art?
				<br/>
				<br/>
				<strong>Kabu</strong>
				<br/>
				Written by Breezy Scranton and Karin Andersen — On the relationship between animals and humans through the lens of art history
				<br/>
				<br/>
				<strong>Intermission</strong>
				<br/>
				Written by Jenna Soule — On the adaptation of artists through COVID
				<br/>
				<br/>
				<strong>Fleeting But Not Fleeting</strong>
				<br/>
				A podcast recorded by Dafna Margalit — What is a love life to you? Asking for a friend…
				<br/>
				<br/>
				<strong>Laconic</strong>
				<br/>
				A photoset shot by Camille Seaman and a written short story — An expedition into Antartica
				<br/>
				<br/>
				My responsibilities for this project:
				<ul>
					<li>
						Designing UI/UX with Figma
					</li>
					<li>
						Building platform with Hasura, GraphQL, Lambda, Clerk, NextJS, Typescript, React
					</li>
					<li>
						Assistant editor for content curation
					</li>
				</ul>
			</Text>
			<Spacer height='100px'/>
		</GridLayout>
	)
}