import './Map.scss'

const Map = () => {
	const address = 'Lifestyle Immobilien AG, Alpenblickstrasse 20, 8853 Lachen, Switzerland'
	const src = `https://www.google.com/maps?q=47.193848,8.851234&z=16&t=k&output=embed`

	return (
		<div className='map'>
			<iframe
				title={`Mapa: ${address}`}
				src={src}
				className='map-iframe'
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				allowFullScreen
			/>
		</div>
	)
}

export default Map
