import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { Link } from 'react-router-dom'

// @ts-ignore
import styles from './Scrollup.module.scss'

const ScrollUp = () => {
	window.addEventListener('scroll', function () {
		const scrollUp = this.document.querySelector('.scrollup')
		// TODO: When the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class.
		if (this.scrollY >= 560) {
			// @ts-ignore
			scrollUp.classList.add(styles.show__scroll)
		} else {
			// @ts-ignore
			scrollUp.classList.remove(styles.show__scroll)
		}
	})

	return (
		<Link to='' className={`${styles.scrollup} scrollup`}>
			<AiOutlineArrowUp className={styles.scrollup__icon} />
		</Link>
	)
}

export default ScrollUp
