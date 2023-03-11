import React from 'react'

import Backend from './Backend'
import Frontend from './Frontend'
// @ts-ignore
import styles from './Skills.module.scss'

const Skills = () => {
	return (
		<div id='skills' className={`${styles.skills} ${styles.section}`}>
			<h2 className={styles.section__title}>Skills</h2>
			<span className={styles.section__subtitle}>My introduction</span>

			<div
				className={`${styles.skills__container} ${styles.container} ${styles.grid}`}
			>
				<Frontend />
				<Backend />
			</div>
		</div>
	)
}

export default Skills
