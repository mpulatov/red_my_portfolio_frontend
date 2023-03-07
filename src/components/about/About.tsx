import React, { FC } from 'react'

// @ts-ignore
import AboutImg from '../../assets/about.JPG'

// @ts-ignore
import styles from './About.module.scss'

type Props = {}

const About: FC = (props: Props) => {
	return (
		<section className={`${styles.about} ${styles.section}`}>
			<h2 className={styles.section__title}>About Me</h2>
			<span className={styles.section__subtitle}>My introduction</span>

			<div
				className={`${styles.about__container} ${styles.container} ${styles.grid}`}
			>
				<img src={AboutImg} alt='' className={styles.about__img} />
			</div>
		</section>
	)
}

export default About
