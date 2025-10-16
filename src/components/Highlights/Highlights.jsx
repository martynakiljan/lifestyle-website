import './Highlights.scss'
import Circle from '../Circle/Circle'

const Highlights = () => {
	return (
		<div className='highlights'>
			<div className='highlights__inner'>
				<div className='highlight'>
					<div className='highlight__circle'>
						<Circle />
					</div>
					<div className='high light__inner'>
						<h3 className='highlight_title'>Lichfurchfluetete Räume</h3>
						<p className='highlight_text'>Grosszügige Fensterflächen schaffen eine helle, einladende Wohnatmosphäre.</p>
					</div>
				</div>
				<div className='highlight'>
					<div className='highlight__circle'>
						<Circle />
					</div>
					<div className='high light__inner'>
						<h3 className='highlight_title'>Herrliche Ausblicke</h3>
						<p className='highlight_text'>Süd-orientierte Aussenbereiche mit Blick ins Grüne.</p>
					</div>
				</div>
				<div className='highlight'>
					<div className='highlight__circle'>
						<Circle />
					</div>
					<div className='high light__inner'>
						<h3 className='highlight_title'>Premium Küchen</h3>
						<p className='highlight_text'>Hochwertige Küche mit Kochinsel und modernen Geräten.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Highlights
