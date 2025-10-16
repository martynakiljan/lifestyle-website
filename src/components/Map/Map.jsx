import './Map.scss'

const Map = () => {
	const src = 'https://www.google.com/maps?q=Alpenblickstrasse+20,+8853+Lachen,+Switzerland&z=16&t=k&output=embed'

	return (
		<div className='map'>
			<iframe
				title='Mapa: Alpenblickstrasse 20, 8853 Lachen'
				src={src}
				className='map-iframe'
				loading='lazy'
				allowFullScreen
				referrerPolicy='no-referrer-when-downgrade'
			/>
		</div>
	)
}

export default Map
