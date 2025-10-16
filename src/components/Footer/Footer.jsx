import './Footer.scss'
import logo from '../../assets/images/logo_li_claim_2019_negativ.png'
import img from '../../assets/images/lifestyle-immobilien-team-1.webp'

const Footer = () => {


	return (
		<footer className='footer'>
			<div className='footer_inner'>
				<div className='footer_firtsCol'>
					<div className='footer_col'>
						<h4 className='footer_title'>Verkauf und Beratung</h4>
						<img
							src={logo}
							alt='logo'
							className='footer_logo'
						/>
					</div>
					<div className='footer_col'>
						<address className='footer_contact'>
							<p className='footer_text'>Lifestyle Immobilien AG</p>
							<p className='footer_text'>Alpenblickstrasse 20</p>
							<p className='footer_text'>8853 Lachen</p>

							<a
								className='footer_link'
								href='tel:+41554623000'
							>
								T 055 462 30 00
							</a>
							<a
								className='footer_link'
								href='mailto:office@lifestyle-immobilien.ch'
							>
								office@lifestyle-immobilien.ch
							</a>
						</address>
					</div>
				</div>
				<div className='footer_colImg '>
					<img
						className='footer_img'
						alt='team'
						src={img}
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
