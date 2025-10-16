import './assets/styles/global.scss'
import Header from './components/Header/Header'
import AnimatedIsometry from './components/AnimatedIsometry/AnimatedIsometry'
import Map from './components/Map/Map'
import Intro from './components/Intro/Intro'
import Highlights from './components/Highlights/Highlights'
import TextImage from './components/TextImage/TextImage'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<>
			<Header />
			<div className='website-container'>
				<Intro />
				<Highlights />
				<TextImage />
				<AnimatedIsometry />

				<Map />
			</div>
			<Footer />
		</>
	)
}

export default App
