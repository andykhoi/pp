import { ProjectNav, ProjectHeader} from '@/app/components/Projects'
import { GridLayout } from '@/app/components/Grids'
import { VideoPreview } from '@/app/components/VideoPreview'
import { Spacer } from '@/app/components/Spacer'
import { Text } from '@/app/components/Text'

export default function Mag() {
	return (
		<GridLayout>
			<Spacer height='12px' breakpointHeight='28px'/>
			<ProjectNav back={'/work'} link='https://steepla.com/' />
			<Spacer height='20px' breakpointHeight='20px'/>
			<ProjectHeader thumbnail='/steep_logo.png' alt='Logo for Steep LA' title='Steep LA' software={[ 'Figma','Shopify Liquid', 'JavaScript', 'HTML', 'CSS']}/>
			<Spacer height='32px' breakpointHeight='56px'/>
			<VideoPreview 
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF3SURBVHgBDY/NThNRAEbPbWc6t0LbSatBQxQTLWisf4gmLt0YRRM3yhu4dOXCuDPxYUzcEZcmwIIEQgINJRBK+GmBQAttp52WdMrcO8Mk3/J8Jzni54/voTmc46xxzvW0xasnEzyefE2712Pga3QIvtIYRr9DvlBg5u0UE3dHEYTUqut0WyGNC0X7wkepAOP51CTTb54ihIBAR7skLUHWlmnu1HHbAw7rDQzHI3oojJhAa5+IRps2+13JWrFMx2nQcj2MHC6Dfo+YZUaQoLhd5WzzP7cKHzhRi5TKdYx4jPi7cX5pIdk9dVksHUS2IZqXcY5qLWRS4noKU0pi+eQu3a7DcUdx514et+Pw5+8sO3sVVoslbBy+fXqEkcjY3HjxEdtXZDMpqpUKCStJeWWelw9G+Dz9BTtlRg2ZhwzrJlsnLjlrlLW5WcasNjNf3zOev48wLULlIcr/fofyWoqFpQ36ns/trGBo7BlBeoSbqQTZ0CUIAq4A3ESflV4rj00AAAAASUVORK5CYII='
				src='/steep.mp4'
				poster='/steep_poster.png'
			/>
			<Spacer height='28px' breakpointHeight='32px' />
			<Text>
				A fun build for an NFT collection, inspired by lo-fi music. Designs by Nathan Pokpongkiat.
			</Text>
			<Spacer height='100px'/>
		</GridLayout>
	)
}