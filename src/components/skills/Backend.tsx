import React from 'react'

// @ts-ignore
import styles from './Skills.module.scss'

const Backend = () => {
	return (
		<div className={styles.skills__content}>
			<h3 className={styles.skills__title}>Backend Developer</h3>

			<div className={styles.skills__box}>
				<div className={styles.skills__group}>
					<div className={styles.skills__data}>
						<div>
							<h3 className={styles.skills__name}>NodeJs</h3>
							<span className={styles.skills__level}>Advanced</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Backend
