import './TextImage.scss'
import view from '../../assets/images/Lachen-Marina-Hafen-Sunrise_GP18133-11000px_Gerry_Pacher.jpg'
import Circle from '../Circle/Circle'

const TextImage = () => {
	return (
		<div className='textimage'>
			<div className='textimage_col textimage_image'>
				<img
					src={view}
					alt='Logo'
					className='view'
				/>
			</div>
			<div className='textimage_col textimage_text'>
				<h2 className='title-h2'>Leben am Zürichsee</h2>
				<p className='textimage_p'>
					Lachen SZ bietet mit seiner Nähe zum Zürichsee, der hervorragenden Infrastruktur
					<br></br>und zahlreichen Freizeitmöglichkeiten ein Wohnumfeld, das <br></br>urbanes Leben und naturnahe
					Erholung ideal vereint. Ob für Singles, Paare <br></br>oder Familien –Twelve ist ein Zuhause, das den Alltag
					zur Nebensache macht.
				</p>
				<div className='textimage_address'>
					<div className='circle'></div>
					<Circle />
					<div className='textimage_addressbg'>
						<span>Alpenblickstrasse 12, 8853 Lachen SZ</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TextImage
