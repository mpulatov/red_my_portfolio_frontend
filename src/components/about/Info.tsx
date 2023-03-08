import React, { FC } from 'react'

// @ts-ignore
import styles from './About.module.scss'

type Props = {}

const Info: FC = (props: Props) => {
	return (
		<div className={`${styles.about__info} ${styles.grid}`}>
			<div className={styles.about__box}>
				<h3 className={styles.about__title}>Experience</h3>
				<span className={styles.about__subtitle}>2 Years Working</span>
			</div>

			<div className={styles.about__box}>
				<h3 className={styles.about__title}>Support</h3>
				<span className={styles.about__subtitle}>Online 24/7</span>
			</div>
		</div>
	)
}

export default Info
