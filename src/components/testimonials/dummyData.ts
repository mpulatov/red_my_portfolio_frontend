// @ts-ignore
import Image1 from '../../assets/testimonial1.png'
// @ts-ignore
import Image2 from '../../assets/testimonial2.png'
// @ts-ignore
import Image3 from '../../assets/testimonial3.png'

interface IData {
	id: number
	image: string
	title: string
	description: string
}
export const Data: IData[] = [
	{
		id: 1,
		image: Image1,
		title: 'Jon Doe',
		description:
			'A really good job, all aspects of the project were followed step by step and with good results.'
	},

	{
		id: 2,
		image: Image2,
		title: 'Jon Doe',
		description:
			'A really good job, all aspects of the project were followed step by step and with good results.'
	},

	{
		id: 3,
		image: Image3,
		title: 'Jon Doe',
		description:
			'A really good job, all aspects of the project were followed step by step and with good results.'
	}
]
