import { useEffect, useRef } from 'react'
import './Header.scss'
import logo from '../../assets/images/logo_twelve_lachen.svg'

const Header = () => {
	const headerRef = useRef(null)
	const sentinelRef = useRef(null)

	useEffect(() => {
		const header = headerRef.current
		const sentinel = sentinelRef.current
		if (!header || !sentinel) return

		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) header.classList.add('header--fade')
				else header.classList.remove('header--fade')
			},
			{ root: null, rootMargin: '0px 0px -35% 0px', threshold: 0 }
		)

		io.observe(sentinel)
		return () => io.disconnect()
	}, [])

	return (
		<header
			className='header'
			ref={headerRef}
		>
			<div className='header_inner'>
				<img
					src={logo}
					alt='Logo'
					className='header_logo'
				/>
			</div>
			<span
				className='header_sentinel'
				aria-hidden
				ref={sentinelRef}
			/>
		</header>
	)
}

export default Header
