import React, { FC } from 'react'

import Data from './Data'
// @ts-ignore
import styles from './Home.module.scss'
import Social from './Social'

type Props = {}

const Home: FC = (props: Props) => {
	return (
		<section className={`${styles.home} ${styles.section}`}>
			<div
				className={`${styles.home__container} ${styles.container} ${styles.grid}`}
			>
				<div className={`${styles.home__content} ${styles.grid}`}>
					<Social />

					<div className={styles.home__img}></div>

					<Data />
				</div>
			</div>
		</section>
	)
}

export default Home
