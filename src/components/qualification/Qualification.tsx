import React, { useState } from 'react'
import { BsCalendar } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

// @ts-ignore
import styles from './Qualification.module.scss'

const Qualification = () => {
	const [visibleState, setVisibleState] = useState(1)

	const handleVisibility = (index: React.SetStateAction<number>) => {
		setVisibleState(index)
	}

	return (
		<section className={`${styles.qualification} ${styles.section}`}>
			<h2 className={styles.section__title}>Qualification</h2>
			<span className={styles.section__subtitle}>My introduction</span>

			<div className={`${styles.qualification__container} ${styles.container}`}>
				<div className={styles.qualification__tabs}>
					<div
						className={
							visibleState === 1
								? `${styles.qualification__button} ${styles.qualification__button_flex} ${styles.qualification__active}`
								: `${styles.qualification__button} ${styles.qualification__button_flex}`
						}
						onClick={() => handleVisibility(1)}
					>
						<FaGraduationCap
							className={styles.qualification__icon}
						></FaGraduationCap>{' '}
						Education
					</div>

					<div
						className={
							visibleState === 2
								? `${styles.qualification__button} ${styles.qualification__button_flex} ${styles.qualification__active}`
								: `${styles.qualification__button} ${styles.qualification__button_flex}`
						}
						onClick={() => handleVisibility(2)}
					>
						<MdWork className={styles.qualification__icon}></MdWork> Experience
					</div>
				</div>

				<div className={styles.qualification__sections}>
					<div
						className={
							visibleState === 1
								? `${styles.qualification__content} ${styles.qualification__content_active}`
								: `${styles.qualification__content}`
						}
					>
						<div className={styles.qualification__data}>
							<div>
								<h3 className={styles.qualification__title}>Web Developer</h3>
								<span className={styles.qualification__subtitle}>
									Spain - Institute
								</span>

								<div className={styles.qualification__calendar}>
									<BsCalendar /> 2019 - 2021
								</div>
							</div>

							<div>
								<span className={styles.qualification__rounded}></span>
								<span className={styles.qualification__line}></span>
							</div>
						</div>

						<div className={styles.qualification__data}>
							<div></div>
							<div>
								<span className={styles.qualification__rounded}></span>
								<span className={styles.qualification__line}></span>
							</div>
							<div>
								<h3 className={styles.qualification__title}>Web Developer</h3>
								<span className={styles.qualification__subtitle}>
									Spain - Institute
								</span>

								<div className={styles.qualification__calendar}>
									<BsCalendar /> 2021 - Present
								</div>
							</div>
						</div>
					</div>

					{/*	Experience*/}

					<div
						className={
							visibleState === 2
								? `${styles.qualification__content} ${styles.qualification__content_active}`
								: `${styles.qualification__content}`
						}
					>
						<div className={styles.qualification__data}>
							<div>
								<h3 className={styles.qualification__title}>Web Developer</h3>
								<span className={styles.qualification__subtitle}>
									Spain - Institute
								</span>

								<div className={styles.qualification__calendar}>
									<BsCalendar /> 2019 - 2028
								</div>
							</div>

							<div>
								<span className={styles.qualification__rounded}></span>
								<span className={styles.qualification__line}></span>
							</div>
						</div>

						<div className={styles.qualification__data}>
							<div></div>
							<div>
								<span className={styles.qualification__rounded}></span>
								<span className={styles.qualification__line}></span>
							</div>
							<div>
								<h3 className={styles.qualification__title}>Web Developer</h3>
								<span className={styles.qualification__subtitle}>
									Spain - Institute
								</span>

								<div className={styles.qualification__calendar}>
									<BsCalendar /> 2021 - Present
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Qualification
