import React from 'react'

// @ts-ignore
import styles from './Skills.module.scss'

const Frontend = () => {
	return (
		<div className={styles.skills__content}>
			<h3 className={styles.skills__title}>Frontend Developer</h3>

			<div className={styles.skills__box}>
				<div className={styles.skills__group}>
					<div className={styles.skills__data}>
						<div>
							<h3 className={styles.skills__name}>ReactJs</h3>
							<span className={styles.skills__level}>Advanced</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Frontend
