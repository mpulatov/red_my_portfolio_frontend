import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

// @ts-ignore
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__container} ${styles.container}`}>
				<h1 className={styles.footer__title}>MPulatov</h1>

				<ul className={styles.footer__list}>
					<li>
						<Link to='/' className={styles.footer__link}>
							About
						</Link>
					</li>

					<li>
						<Link to='/' className={styles.footer__link}>
							Projects
						</Link>
					</li>

					<li>
						<Link to='/' className={styles.footer__link}>
							Testimonials
						</Link>
					</li>
				</ul>

				<div className={styles.footer__social}>
					<SocialIcon
						network='instagram'
						fgColor='gray'
						bgColor='transparent'
						style={{ height: 50, width: 50 }}
						className={`${styles.footer__social_icon} ${styles.footer__social_link}`}
					/>
					<SocialIcon
						network='github'
						fgColor='gray'
						bgColor='transparent'
						style={{ height: 50, width: 50 }}
						className={`${styles.footer__social_icon} ${styles.footer__social_link}`}
					/>

					<SocialIcon
						network='telegram'
						fgColor='gray'
						bgColor='transparent'
						style={{ height: 50, width: 50 }}
						className={`${styles.footer__social_icon} ${styles.footer__social_link}`}
					/>
				</div>

				<span className={styles.footer__copy}>&#169;</span>
			</div>
		</footer>
	)
}

export default Footer
