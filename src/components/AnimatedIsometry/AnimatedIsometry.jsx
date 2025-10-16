import { useState } from 'react'
import './AnimatedIsometry.scss'

const AnimatedIsometry = () => {
	const [activeRow, setActiveRow] = useState(null)

	const handleSvgClick = e => {
		const link = e.target.closest('a')
		if (!link) return

		e.preventDefault()
		const row = link.getAttribute('data-row')
		if (!row) return

		setActiveRow(prev => (prev === row ? null : row))
	}
	return (
		<div className='animatedIsometry'>
			<h2 className='title-h2'>Grundrisse & Preise</h2>
			<div className='animatedIsometry__inner'>
				<div
					className='animatedIsometry__svg'
					onClick={handleSvgClick}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						id='Ebene_1'
						data-name='Ebene 1'
						version='1.1'
						viewBox='0 0 442.3 411.8'
						style={{ overflow: 'visible' }}
					>
						<g id='EG'>
							<g id='whg4003'>
								{/* 003 */}
								<a
									xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-eg-003'
									data-row='003'
									className={activeRow === '003' ? 'is-active' : ''}
								>
									<polygon
										className='cls-5'
										points='250.4 272.7 251.5 320 226.4 335.1 225.3 287.9 250.4 272.7'
									/>
									<polygon
										className='cls-4'
										points='250.4 272.7 225.3 287.9 245.8 291.3 222.8 305.1 210.6 303.1 195.1 312.4 115.6 299.5 83.2 319.1 3.2 306 66.7 267.6 118.3 276 150.7 256.5 250.4 272.7'
									/>
									<polygon
										className='cls-5'
										points='83.2 319.1 84.3 366.3 4.3 353.2 3.2 306 83.2 319.1'
									/>
									<polygon
										className='cls-3'
										points='115.6 299.5 116.7 346.7 84.3 366.3 83.2 319.1 115.6 299.5'
									/>
									<polygon
										className='cls-5'
										points='195.1 312.4 196.2 359.7 116.7 346.7 115.6 299.5 195.1 312.4'
									/>
									<polygon
										className='cls-3'
										points='210.6 303.1 211.7 350.4 196.2 359.7 195.1 312.4 210.6 303.1'
									/>
									<polygon
										className='cls-5'
										points='222.8 305.1 223.9 352.4 211.7 350.4 210.6 303.1 222.8 305.1'
									/>
									<polygon
										className='cls-3'
										points='245.8 291.3 246.9 338.5 223.9 352.4 222.8 305.1 245.8 291.3'
									/>
								</a>
							</g>
							<g id='Treppe'>
								<g>
									<polygon
										className='cls-5'
										points='236 307.3 237.1 354.5 223.9 352.4 222.8 305.1 236 307.3'
									/>
									<polygon
										className='cls-1'
										points='236 307.3 237.1 354.5 221.6 363.8 220.5 316.6 236 307.3'
									/>
									<polygon
										className='cls-6'
										points='321.3 303.6 322.4 350.8 273.7 342.9 272.5 295.6 321.3 303.6'
									/>
								</g>
								<polygon
									className='cls-5'
									points='282.9 326.8 284.1 374 221.6 363.8 220.5 316.6 282.9 326.8'
								/>
								<polygon
									className='cls-3'
									points='321.3 303.6 322.4 350.8 284.1 374 282.9 326.8 321.3 303.6'
								/>
								<polygon
									className='cls-4'
									points='321.3 303.6 282.9 326.8 220.5 316.6 236 307.3 222.8 305.1 245.8 291.3 272.5 295.6 321.3 303.6'
								/>
							</g>
							<g id='whg4001'>
								{/* 001 */}
								<a
									xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-eg-001'
									data-row='001'
									className={activeRow === '001' ? 'is-active' : ''}
								>
									<g>
										<polygon
											className='cls-3'
											points='441.1 303.9 408.7 323.5 404.8 325.8 345.2 361.8 346.3 409.1 405.9 373 409.8 370.7 442.2 351.1 441.1 303.9'
										/>
										<polygon
											className='cls-4'
											points='441.1 303.9 408.7 323.5 404.8 325.8 345.2 361.8 268.7 349.4 250.5 346.4 282.9 326.8 321.3 303.6 272.5 295.6 297.7 280.5 441.1 303.9'
										/>
									</g>
									<polygon
										className='cls-5'
										points='345.2 361.8 268.7 349.4 250.5 346.4 251.6 393.6 269.8 396.6 346.3 409.1 345.2 361.8'
									/>
								</a>
							</g>
							<g id='whg4002'>
								{/* 002 */}
								<a
									xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-eg-002'
									data-row='002'
									className={activeRow === '002' ? 'is-active' : ''}
								>
									<polygon
										className='cls-5'
										points='194.5 337.2 195.6 384.5 84.3 366.3 83.2 319.1 194.5 337.2'
									/>
									<polygon
										className='cls-5'
										points='243.7 364.5 244.8 411.7 170.6 399.6 169.5 352.3 243.7 364.5'
									/>
									<polygon
										className='cls-3'
										points='268.7 349.4 269.8 396.6 244.8 411.7 243.7 364.5 268.7 349.4'
									/>
									<polygon
										className='cls-4'
										points='236 307.3 220.5 316.6 282.9 326.8 250.5 346.4 268.7 349.4 243.7 364.5 169.5 352.3 194.5 337.2 83.2 319.1 115.6 299.5 195.1 312.4 210.6 303.1 222.8 305.1 236 307.3'
									/>
								</a>
							</g>
						</g>

						<g
							id='_1OG'
							data-name=' 1OG'
						>
							<g id='whg4103'>
								<a xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-1og-103'>
									{/* bez zmian */}
									<polygon
										className='cls-1'
										points='65.7 220.6 66.8 267.9 66.4 268.1 65.2 220.9 65.7 220.6'
									/>
									<polygon
										className='cls-6'
										points='116.8 229.3 117.9 276.6 66.4 268.1 65.2 220.9 116.8 229.3'
									/>
									<polygon
										className='cls-5'
										points='234.2 259.5 235.3 306.7 209.9 302.6 208.8 255.3 234.2 259.5'
									/>
									<polygon
										className='cls-3'
										points='209.6 256.1 210.7 303.4 195.2 312.7 194.1 265.4 209.6 256.1'
									/>
									<polygon
										className='cls-5'
										points='194 265.4 195.1 312.7 115.6 299.7 114.5 252.5 194 265.4'
									/>
									<polygon
										className='cls-4'
										points='296.7 233.5 271.5 248.6 258.1 246.4 235 260.3 209.6 256.1 194.1 265.4 114.6 252.5 82.2 272.1 2.2 259 65.7 220.6 65.2 220.9 116.8 229.3 149.7 209.5 296.7 233.5'
									/>
									<polygon
										className='cls-3'
										points='114.6 252.5 115.7 299.7 83.3 319.3 82.2 272.1 114.6 252.5'
									/>
									<polygon
										className='cls-5'
										points='82.2 272.1 83.3 319.3 3.3 306.2 2.2 259 82.2 272.1'
									/>
									<polygon
										className='cls-3'
										points='296.7 233.5 297.8 280.7 272.7 295.9 271.5 248.6 296.7 233.5'
									/>
								</a>
							</g>

							<g id='Treppe-2'>
								{/* bez zmian */}
								<polygon
									className='cls-6'
									points='271.5 248.6 272.7 295.9 259.2 293.7 258.1 246.4 271.5 248.6'
								/>
								<polygon
									className='cls-6'
									points='320.3 256.6 321.4 303.8 272.7 295.9 271.5 248.6 320.3 256.6'
								/>
								<polygon
									className='cls-2'
									points='258.1 246.4 259.2 293.7 236.1 307.5 235 260.3 258.1 246.4'
								/>
								<polygon
									className='cls-1'
									points='235 260.3 236.1 307.5 220.6 316.8 219.5 269.6 235 260.3'
								/>
								<polygon
									className='cls-4'
									points='320.3 256.6 281.9 279.8 219.5 269.6 258.1 246.4 271.5 248.6 320.3 256.6'
								/>
								<polygon
									className='cls-5'
									points='282.2 279.8 283.3 327 220.9 316.8 219.8 269.6 282.2 279.8'
								/>
								<polygon
									className='cls-3'
									points='320.3 256.6 321.4 303.8 283.1 327 281.9 279.8 320.3 256.6'
								/>
							</g>

							<g id='whg4102'>
								<a xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-1og-102'>
									{/* bez zmian */}
									<polygon
										className='cls-5'
										points='193.5 290.2 119.8 278.2 82.2 272.1 83.3 319.3 120.9 325.5 194.6 337.5 193.5 290.2'
									/>
									<g>
										<polygon
											className='cls-4'
											points='193.5 290.2 194.6 337.5 169.6 352.6 168.5 305.3 193.5 290.2'
										/>
										<polygon
											className='cls-5'
											points='267.7 302.4 268.8 349.6 250.6 346.6 249.5 299.4 267.7 302.4'
										/>
									</g>
									<polygon
										className='cls-3'
										points='281.9 279.8 283.1 327 250.6 346.6 249.5 299.4 281.9 279.8'
									/>
									<polygon
										className='cls-5'
										points='169.5 345.3 169.6 352.6 95.9 340.6 95.8 333.3 169.5 345.3'
									/>
									<polygon
										className='cls-4'
										points='194.5 330.2 169.5 345.3 95.8 333.3 120.8 318.2 194.5 330.2'
									/>
									<polygon
										className='cls-3'
										points='267.7 302.4 268.8 349.6 243.8 364.7 242.7 317.5 267.7 302.4'
									/>
									<polygon
										className='cls-4'
										points='235 260.3 219.5 269.6 281.9 279.8 249.5 299.4 267.7 302.4 242.7 317.5 168.5 305.3 193.5 290.2 119.8 278.2 82.2 272.1 114.6 252.5 194.1 265.4 209.6 256.1 235 260.3'
									/>
									<polygon
										className='cls-5'
										points='242.7 317.5 243.8 364.7 169.6 352.6 168.5 305.3 242.7 317.5'
									/>
								</a>
							</g>

							<g id='whg4101'>
								{/* 004 */}
								<a
									xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-1og-101'
									data-row='004'
									className={activeRow === '004' ? 'is-active' : ''}
								>
									<polygon
										className='cls-5'
										points='344.2 314.8 345.3 362.1 268.8 349.6 267.7 302.4 344.2 314.8'
									/>
									<polygon
										className='cls-3'
										points='440.1 256.9 441.2 304.1 345.3 362.1 344.2 314.8 440.1 256.9'
									/>
									<polygon
										className='cls-4'
										points='440.1 256.9 344.2 314.8 267.7 302.4 249.5 299.4 320.3 256.6 271.5 248.6 296.7 233.5 440.1 256.9'
									/>
									<polygon
										className='cls-3'
										points='345.2 354.8 345.3 362.1 320.3 377.2 320.2 369.9 345.2 354.8'
									/>
									<polygon
										className='cls-4'
										points='345.2 354.8 320.2 369.9 243.7 357.5 268.7 342.4 345.2 354.8'
									/>
									<polygon
										className='cls-5'
										points='320.2 369.9 320.3 377.2 243.8 364.7 243.7 357.5 320.2 369.9'
									/>
								</a>
							</g>
						</g>

						{/* === 2OG, 3OG, Attika — bez zmian (pozostawiam w całości, nic nie modyfikuję) */}
						<g
							id='_2OG'
							data-name=' 2OG'
						>
							<g id='whg4203'>
								<a xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-2og-203'>
									<polygon
										className='cls-1'
										points='64.7 173.6 65.8 220.9 65.4 221.1 64.2 173.9 64.7 173.6'
									/>
									<polygon
										className='cls-1'
										points='148.7 162.5 149.8 209.7 116.9 229.6 115.8 182.3 148.7 162.5'
									/>
									<polygon
										className='cls-6'
										points='115.8 182.3 116.9 229.6 65.4 221.1 64.2 173.9 115.8 182.3'
									/>
									<polygon
										className='cls-3'
										points='295.7 186.5 296.8 233.7 271.7 248.9 270.5 201.6 295.7 186.5'
									/>
									<polygon
										className='cls-5'
										points='234 213.3 235.1 260.5 209.7 256.4 208.6 209.1 234 213.3'
									/>
									<polygon
										className='cls-3'
										points='208.6 209.1 209.7 256.4 194.3 265.7 193.1 218.4 208.6 209.1'
									/>
									<polygon
										className='cls-5'
										points='193.1 218.4 194.3 265.7 114.7 252.7 113.6 205.5 193.1 218.4'
									/>
									<polygon
										className='cls-4'
										points='295.7 186.5 270.5 201.6 257.1 199.4 234 213.3 208.6 209.1 193.1 218.4 113.6 205.5 81.2 225.1 1.2 212 64.7 173.6 64.2 173.9 115.8 182.3 148.7 162.5 295.7 186.5'
									/>
									<polygon
										className='cls-3'
										points='113.6 205.5 114.7 252.7 82.3 272.3 81.2 225.1 113.6 205.5'
									/>
									<polygon
										className='cls-5'
										points='81.2 225.1 82.3 272.3 2.3 259.2 1.2 212 81.2 225.1'
									/>
								</a>
							</g>
							<g id='Treppe-3'>
								<polygon
									className='cls-6'
									points='270.5 201.6 271.7 248.9 258.2 246.7 257.1 199.4 270.5 201.6'
								/>
								<polygon
									className='cls-6'
									points='319.3 209.6 320.4 256.8 271.7 248.9 270.5 201.6 319.3 209.6'
								/>
								<polygon
									className='cls-2'
									points='257.1 199.4 258.2 246.7 235.1 260.5 234 213.3 257.1 199.4'
								/>
								<polygon
									className='cls-1'
									points='234 213.3 235.1 260.5 219.6 269.8 218.5 222.6 234 213.3'
								/>
								<polygon
									className='cls-4'
									points='319.3 209.6 280.9 232.8 218.5 222.6 257.1 199.4 270.5 201.6 319.3 209.6'
								/>
								<polygon
									className='cls-5'
									points='280.9 232.8 282.1 280 219.6 269.8 218.5 222.6 280.9 232.8'
								/>
								<polygon
									className='cls-3'
									points='319.3 209.6 320.4 256.8 282.1 280 280.9 232.8 319.3 209.6'
								/>
							</g>
							<g id='whg4202'>
								<a xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-2og-202'>
									<polygon
										className='cls-5'
										points='192.5 243.2 118.8 231.2 81.2 225.1 82.3 272.3 119.9 278.5 193.6 290.5 192.5 243.2'
									/>
									<g>
										<polygon
											className='cls-3'
											points='280.9 232.8 282.1 280 249.6 299.6 248.5 252.4 280.9 232.8'
										/>
										<polygon
											className='cls-5'
											points='266.7 255.4 267.8 302.6 249.6 299.6 248.5 252.4 266.7 255.4'
										/>
										<polygon
											className='cls-3'
											points='192.5 243.2 193.6 290.5 168.6 305.6 167.5 258.3 192.5 243.2'
										/>
									</g>
									<polygon
										className='cls-5'
										points='168.5 298.3 168.6 305.6 94.9 293.6 94.8 286.3 168.5 298.3'
									/>
									<polygon
										className='cls-4'
										points='193.5 283.2 168.5 298.3 94.8 286.3 119.8 271.2 193.5 283.2'
									/>
									<polygon
										className='cls-3'
										points='266.7 255.4 267.8 302.6 242.8 317.7 241.7 270.5 266.7 255.4'
									/>
									<polygon
										className='cls-4'
										points='234 213.3 218.5 222.6 280.9 232.8 248.5 252.4 266.7 255.4 241.7 270.5 167.5 258.3 192.5 243.2 118.8 231.2 81.2 225.1 113.6 205.5 193.1 218.4 208.6 209.1 234 213.3'
									/>
									<polygon
										className='cls-5'
										points='241.7 270.5 242.8 317.7 168.6 305.6 167.5 258.3 241.7 270.5'
									/>
								</a>
							</g>
							<g id='whg4201'>
								<a xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-2og-201'>
									<polygon
										className='cls-5'
										points='343.2 267.8 344.3 315.1 267.8 302.6 266.7 255.4 343.2 267.8'
									/>
									<polygon
										className='cls-3'
										points='439.1 209.9 440.2 257.1 344.3 315.1 343.2 267.8 439.1 209.9'
									/>
									<polygon
										className='cls-4'
										points='439.1 209.9 343.2 267.8 266.7 255.4 248.5 252.4 319.3 209.6 270.5 201.6 295.7 186.5 439.1 209.9'
									/>
									<polygon
										className='cls-3'
										points='344.2 307.8 344.3 315.1 319.3 330.2 319.2 322.9 344.2 307.8'
									/>
									<polygon
										className='cls-4'
										points='344.2 307.8 319.2 322.9 242.7 310.5 267.7 295.4 344.2 307.8'
									/>
									<polygon
										className='cls-5'
										points='319.2 322.9 319.3 330.2 242.8 317.7 242.7 310.5 319.2 322.9'
									/>
								</a>
							</g>
						</g>

						<g
							id='_3OG'
							data-name=' 3OG'
						>
							<g id='whg4303'>
								<a xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-3og-303'>
									<g>
										<polygon
											className='cls-1'
											points='63.7 126.6 64.8 173.9 64.4 174.1 63.2 126.9 63.7 126.6'
										/>
										<polygon
											className='cls-3'
											points='147.7 115.5 148.8 162.7 115.9 182.6 114.8 135.3 147.7 115.5'
										/>
									</g>
									<polygon
										className='cls-6'
										points='114.8 135.3 115.9 182.6 64.4 174.1 63.2 126.9 114.8 135.3'
									/>
									<polygon
										className='cls-3'
										points='294.7 139.5 295.8 186.7 270.7 201.9 269.5 154.6 294.7 139.5'
									/>
									<polygon
										className='cls-5'
										points='233 166.3 234.1 213.5 208.7 209.4 207.6 162.1 233 166.3'
									/>
									<polygon
										className='cls-3'
										points='207.6 162.1 208.7 209.4 193.2 218.7 192.1 171.4 207.6 162.1'
									/>
									<polygon
										className='cls-5'
										points='192.1 171.4 193.2 218.7 113.7 205.7 112.6 158.5 192.1 171.4'
									/>
									<polygon
										className='cls-4'
										points='294.7 139.5 269.5 154.6 256.1 152.4 233 166.3 207.6 162.1 192.1 171.4 112.6 158.5 80.2 178.1 .2 165 63.7 126.6 63.2 126.9 114.8 135.3 147.7 115.5 294.7 139.5'
									/>
									<polygon
										className='cls-3'
										points='112.6 158.5 113.7 205.7 81.3 225.3 80.2 178.1 112.6 158.5'
									/>
									<polygon
										className='cls-5'
										points='80.2 178.1 81.3 225.3 1.3 212.2 .2 165 80.2 178.1'
									/>
								</a>
							</g>
							<g id='Treppe-4'>
								<polygon
									className='cls-6'
									points='269.5 154.6 270.7 201.9 257.2 199.7 256.1 152.4 269.5 154.6'
								/>
								<polygon
									className='cls-6'
									points='318.3 162.6 319.4 209.8 270.7 201.9 269.5 154.6 318.3 162.6'
								/>
								<polygon
									className='cls-2'
									points='256.1 152.4 257.2 199.7 234.1 213.5 233 166.3 256.1 152.4'
								/>
								<polygon
									className='cls-1'
									points='233 166.3 234.1 213.5 218.6 222.8 217.5 175.6 233 166.3'
								/>
								<polygon
									className='cls-4'
									points='318.3 162.6 279.9 185.8 217.5 175.6 256.1 152.4 269.5 154.6 318.3 162.6'
								/>
								<polygon
									className='cls-5'
									points='279.9 185.8 281.1 233 218.6 222.8 217.5 175.6 279.9 185.8'
								/>
								<polygon
									className='cls-3'
									points='318.3 162.6 319.4 209.8 281.1 233 279.9 185.8 318.3 162.6'
								/>
							</g>
							<g id='whg4302'>
								<a xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-3og-302'>
									<polygon
										className='cls-5'
										points='191.5 196.2 117.8 184.2 80.2 178.1 81.3 225.3 118.9 231.5 192.6 243.5 191.5 196.2'
									/>
									<g>
										<polygon
											className='cls-3'
											points='279.9 185.8 281.1 233 248.6 252.6 247.5 205.4 279.9 185.8'
										/>
										<polygon
											className='cls-5'
											points='265.7 208.4 266.8 255.6 248.6 252.6 247.5 205.4 265.7 208.4'
										/>
										<polygon
											className='cls-3'
											points='191.5 196.2 192.6 243.5 167.6 258.6 166.5 211.3 191.5 196.2'
										/>
									</g>
									<polygon
										className='cls-5'
										points='167.5 251.3 167.6 258.6 93.9 246.6 93.8 239.3 167.5 251.3'
									/>
									<polygon
										className='cls-4'
										points='192.5 236.2 167.5 251.3 93.8 239.3 118.8 224.2 192.5 236.2'
									/>
									<polygon
										className='cls-3'
										points='265.7 208.4 266.8 255.6 241.8 270.7 240.7 223.5 265.7 208.4'
									/>
									<polygon
										className='cls-4'
										points='233 166.3 217.5 175.6 279.9 185.8 247.5 205.4 265.7 208.4 240.7 223.5 166.5 211.3 191.5 196.2 117.8 184.2 80.2 178.1 112.6 158.5 192.1 171.4 207.6 162.1 233 166.3'
									/>
									<polygon
										className='cls-5'
										points='240.7 223.5 241.8 270.7 167.6 258.6 166.5 211.3 240.7 223.5'
									/>
								</a>
							</g>
							<g id='whg4301'>
								<a xlinkHref='/mietwohnungen/grundrisse-preise/haus-4/wohnung-4-3og-301'>
									<polygon
										className='cls-5'
										points='342.2 220.8 343.3 268.1 266.8 255.6 265.7 208.4 342.2 220.8'
									/>
									<g>
										<polygon
											className='cls-3'
											points='438.1 162.9 439.2 210.1 343.3 268.1 342.2 220.8 438.1 162.9'
										/>
										<polygon
											className='cls-4'
											points='438.1 162.9 342.2 220.8 265.7 208.4 247.5 205.4 318.3 162.6 269.5 154.6 294.7 139.5 438.1 162.9'
										/>
										<polygon
											className='cls-3'
											points='343.2 260.8 343.3 268.1 318.3 283.2 318.2 275.9 343.2 260.8'
										/>
										<polygon
											className='cls-4'
											points='343.2 260.8 318.2 275.9 241.7 263.5 266.7 248.4 343.2 260.8'
										/>
										<polygon
											className='cls-5'
											points='318.2 275.9 318.3 283.2 241.8 270.7 241.7 263.5 318.2 275.9'
										/>
									</g>
								</a>
							</g>
						</g>

						<g id='Attika'>
							<g
								id='whg4401'
								className='cls-7'
							>
								<polygon
									className='cls-1'
									points='114.1 80.4 115.2 127.6 68.9 155.6 67.8 108.4 114.1 80.4'
								/>
								<polygon
									className='cls-6'
									points='414.6 129.5 415.7 176.7 115.2 127.6 114.1 80.4 414.6 129.5'
								/>
								<polygon
									className='cls-5'
									points='117.7 177.2 80.2 171.1 .2 158 .3 165.2 80.3 178.3 117.9 184.5 117.7 177.2'
								/>
								<polygon
									className='cls-1'
									points='143 120.8 143.1 167 117.9 183.5 116.7 137.2 143 120.8'
								/>
								<polygon
									className='cls-3'
									points='438.1 155.9 438.2 163.1 415.7 176.7 415.6 169.5 438.1 155.9'
								/>
								<polygon
									className='cls-4'
									points='438.1 155.9 415.6 169.5 115.1 120.4 68.8 148.4 144 160.8 117.7 177.2 80.2 171.1 .2 158 63.2 119.9 96.1 100 147.7 108.5 294.7 132.5 438.1 155.9'
								/>
								<polygon
									className='cls-4'
									points='414.6 129.5 341.2 173.8 116.8 137.2 116.7 137.2 143 120.8 67.8 108.4 114.1 80.4 414.6 129.5'
								/>
								<polygon
									className='cls-5'
									points='341.2 173.8 116.8 137.2 116.7 137.2 117.9 183.5 117.9 184.5 342.3 221.1 341.2 173.8'
								/>
								<polygon
									className='cls-3'
									points='414.6 129.5 415.7 176.7 342.3 221.1 341.2 173.8 414.6 129.5'
								/>
								<polygon
									className='cls-5'
									points='143 120.8 138.7 123.7 116.7 137.2 117.4 163.5 68.9 155.6 67.8 108.4 143 120.8'
								/>
								<polygon
									className='cls-4'
									points='342.2 213.8 317.2 228.9 240.7 216.5 166.5 204.3 92.8 192.3 117.8 177.2 342.2 213.8'
								/>
								<polygon
									className='cls-3'
									points='342.2 213.8 342.3 221.1 317.3 236.2 317.2 228.9 342.2 213.8'
								/>
								<polygon
									className='cls-5'
									points='317.2 228.9 240.7 216.5 166.5 204.3 92.8 192.3 92.9 199.6 166.6 211.6 240.8 223.7 317.3 236.2 317.2 228.9'
								/>
							</g>
						</g>
					</svg>
					{/* prettier-ignore-end */}
				</div>
				<div className='animatedIsometry__table'>
					<table>
						<thead>
							<tr>
								<th>Nr.</th>
								<th>Zimmer</th>
								<th>Miete</th>
							</tr>
						</thead>
						<tbody>
							<tr className={activeRow === '001' ? 'is-active' : ''}>
								<td>001</td>
								<td>3½a</td>
								<td>XXX.–</td>
							</tr>
							<tr className={activeRow === '002' ? 'is-active' : ''}>
								<td>002</td>
								<td>3½</td>
								<td>XXX.–</td>
							</tr>
							<tr className={activeRow === '003' ? 'is-active' : ''}>
								<td>003</td>
								<td>3½</td>
								<td>XXX.–</td>
							</tr>
							<tr className={activeRow === '004' ? 'is-active' : ''}>
								<td>004</td>
								<td>3½</td>
								<td>XXX.–</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default AnimatedIsometry
