import React, { FC } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { CgHello } from 'react-icons/cg'
import { Link } from 'react-router-dom'

// @ts-ignore
import styles from './Home.module.scss'

type Props = {}
const Data: FC = (props: Props) => {
	return (
		<div className={styles.home__data}>
			<h1 className={styles.home__title}>
				M Pulatov
				<CgHello className={styles.home__hand} />
			</h1>

			<h3 className={styles.home__subtitle}>React Developer</h3>
			<p className={styles.home__description}>
				The main difference between NPM and Yarn is the package installation
				process. Yarn installs packages in parallel. Yarn is optimized to fetch
				and install multiple packages at once.
			</p>

			<Link to='#' className={`${styles.button} ${styles.button__flex}`}>
				Contact Me
				<AiOutlineSend className={styles.button__icon} />
			</Link>
		</div>
	)
}

export default Data
