import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { FaUserCircle } from 'react-icons/fa'
import { FcServices } from 'react-icons/fc'

// @ts-ignore
import styles from './Services.module.scss'

const Services = () => {
	const [visibleState, setVisibleState] = useState(0)

	const handleVisibility = (index: React.SetStateAction<number>) => {
		setVisibleState(index)
	}

	return (
		<section className={`${styles.services} ${styles.section}`}>
			<h2 className={styles.section__title}>Services</h2>
			<span className={styles.section__subtitle}>My introduction</span>

			<div
				className={`${styles.services__container} ${styles.container} ${styles.grid}`}
			>
				<div className={styles.services__content}>
					<div>
						<FcServices className={styles.services__icon} />
						<h3 className={styles.services__title}>
							Product <br /> Designer
						</h3>
					</div>

					<span
						className={styles.services__button}
						onClick={() => handleVisibility(1)}
					>
						View More
						<AiOutlineArrowRight className={styles.services__button_icon} />
					</span>

					<div
						className={
							visibleState === 1
								? `${styles.services__modal} ${styles.active_modal}`
								: `${styles.services__modal}`
						}
					>
						<div className={styles.services__modal_content}>
							<CgClose
								className={styles.services__model_close}
								onClick={() => handleVisibility(0)}
							/>

							<h3 className={styles.services__modal_title}>
								Product <br /> Designer
							</h3>
							<p className={styles.services__modal_description}>
								The replaced content is sized to fill the element's content box.
								The entire object will completely fill the box. If the object's
								aspect ratio does not match the aspect ratio of its box, then
								the object will be stretched to fit.
							</p>

							<ul
								className={`${styles.services__modal_services} ${styles.grid}`}
							>
								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>

								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>

								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>

								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/*	Second */}
				<div className={styles.services__content}>
					<div>
						<FcServices className={styles.services__icon} />
						<h3 className={styles.services__title}>
							Product <br /> Designer
						</h3>
					</div>

					<span
						className={styles.services__button}
						onClick={() => handleVisibility(2)}
					>
						View More
						<AiOutlineArrowRight className={styles.services__button_icon} />
					</span>

					<div
						className={
							visibleState === 2
								? `${styles.services__modal} ${styles.active_modal}`
								: `${styles.services__modal}`
						}
					>
						<div className={styles.services__modal_content}>
							<CgClose
								className={styles.services__model_close}
								onClick={() => handleVisibility(0)}
							/>

							<h3 className={styles.services__modal_title}>
								Product <br /> Designer
							</h3>
							<p className={styles.services__modal_description}>
								The replaced content is sized to fill the element's content box.
								The entire object will completely fill the box. If the object's
								aspect ratio does not match the aspect ratio of its box, then
								the object will be stretched to fit.
							</p>

							<ul
								className={`${styles.services__modal_services} ${styles.grid}`}
							>
								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>

								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>

								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>

								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/*	third*/}

				<div className={styles.services__content}>
					<div>
						<FcServices className={styles.services__icon} />
						<h3 className={styles.services__title}>
							Product <br /> Designer
						</h3>
					</div>

					<span
						className={styles.services__button}
						onClick={() => handleVisibility(3)}
					>
						View More
						<AiOutlineArrowRight className={styles.services__button_icon} />
					</span>

					<div
						className={
							visibleState === 3
								? `${styles.services__modal} ${styles.active_modal}`
								: `${styles.services__modal}`
						}
					>
						<div className={styles.services__modal_content}>
							<CgClose
								className={styles.services__model_close}
								onClick={() => handleVisibility(0)}
							/>

							<h3 className={styles.services__modal_title}>
								Product <br /> Designer
							</h3>
							<p className={styles.services__modal_description}>
								The replaced content is sized to fill the element's content box.
								The entire object will completely fill the box. If the object's
								aspect ratio does not match the aspect ratio of its box, then
								the object will be stretched to fit.
							</p>

							<ul
								className={`${styles.services__modal_services} ${styles.grid}`}
							>
								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>

								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>

								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>

								<li className={styles.services__modal_service}>
									<FaUserCircle className={styles.services__modal_icon} />
									<p className={styles.services__modal_info}>
										I develop the user interface.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
