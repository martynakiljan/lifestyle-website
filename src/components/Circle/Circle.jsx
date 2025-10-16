import { Settings } from 'lucide-react'
import './Circle.scss'
const Circle = () => {
	return (
		<span
			className='circle__icon'
			aria-hidden='true'
		>
			<Settings size={25} />
		</span>
	)
}

export default Circle
