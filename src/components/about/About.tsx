import React, { FC } from 'react'
import { Link } from 'react-router-dom'

// @ts-ignore
import AboutImg from '../../assets/about.JPG'

// @ts-ignore
import styles from './About.module.scss'
import Info from './Info'

type Props = {}

const About: FC = (props: Props) => {
	return (
		<section className={`${styles.about} ${styles.section}`} id='about'>
			<h2 className={styles.section__title}>About Me</h2>
			<span className={styles.section__subtitle}>My introduction</span>

			<div
				className={`${styles.about__container} ${styles.container} ${styles.grid}`}
			>
				<img src={AboutImg} alt='' className={styles.about__img} />

				<div className={styles.about__data}>
					<Info />

					<p className={styles.about__description}>
						In the code snippets above we’re declaring a new wildcard module for
						your CSS and SCSS files. This did it for me. Happy coding!
					</p>

					<Link to='#' className={`${styles.button} ${styles.button__flex}`}>
						Download CV
					</Link>
				</div>
			</div>
		</section>
	)
}

export default About
