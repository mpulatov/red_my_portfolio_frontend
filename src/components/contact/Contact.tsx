import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import {
	AiFillInstagram,
	AiFillPhone,
	AiOutlineArrowRight
} from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

// @ts-ignore
import styles from './Contact.module.scss'

const Contact = () => {
	const form = useRef<HTMLInputElement>()

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_2023',
				'template_mtnjbtg',
				// @ts-ignore
				form.current,
				'mluSlQdt406u8VkcV'
			)
			.then(
				(result: { text: unknown }) => {
					console.log(result.text)
				},
				(error: { text: unknown }) => {
					console.log(error.text)
				}
			)
		e.currentTarget.reset()
	}

	return (
		<section
			className={`${styles.contact} ${styles.section} ${styles.container}`}
		>
			<h2 className={styles.section__title}>Contact</h2>
			<span className={styles.section__subtitle}>My Contact</span>

			<div
				className={`${styles.contact__container} ${styles.container} ${styles.grid}`}
			>
				<div className={styles.contact__content}>
					<h3 className={styles.contact__title}>Talk to me</h3>

					<div className={styles.contact__info}>
						<div className={styles.contact__card}>
							<MdEmail className={styles.contact__card_icon} />

							<h3 className={styles.contact__card_title}>Email</h3>
							<span className={styles.contact__card_data}>
								mpulatov1995@gmail.com
							</span>

							<Link to='' className={styles.contact__button}>
								Write me{' '}
								<AiOutlineArrowRight className={styles.contact__button_icon} />
							</Link>
						</div>

						{/*Second Card*/}
						<div className={styles.contact__card}>
							<AiFillPhone className={styles.contact__card_icon} />

							<h3 className={styles.contact__card_title}>WhatsApp</h3>
							<span className={styles.contact__card_data}>+992800008016</span>

							<Link to='' className={styles.contact__button}>
								Write me{' '}
								<AiOutlineArrowRight className={styles.contact__button_icon} />
							</Link>
						</div>

						{/*Third Card*/}
						<div className={styles.contact__card}>
							<AiFillInstagram className={styles.contact__card_icon} />

							<h3 className={styles.contact__card_title}>Instagram</h3>
							<span className={styles.contact__card_data}>mpulatov__</span>

							<Link to='' className={styles.contact__button}>
								Write me{' '}
								<AiOutlineArrowRight className={styles.contact__button_icon} />
							</Link>
						</div>
					</div>
				</div>

				<div className={styles.contact__content}>
					<h3 className={styles.contact__title}>Write me your project</h3>

					<form
						// @ts-ignore
						ref={form}
						onSubmit={sendEmail}
						className={styles.contact__form}
					>
						<div className={styles.contact__form_div}>
							<label htmlFor='' className={styles.contact__form_tag}>
								Name
							</label>
							<input
								type='text'
								name='name'
								className={styles.contact__form_input}
								placeholder='Insert your name'
							/>
						</div>

						<div className={styles.contact__form_div}>
							<label htmlFor='' className={styles.contact__form_tag}>
								Email
							</label>
							<input
								type='email'
								name='email'
								className={styles.contact__form_input}
								placeholder='Insert your email'
							/>
						</div>

						<div
							className={`${styles.contact__form_div} ${styles.contact__form_area}`}
						>
							<label htmlFor='' className={styles.contact__form_tag}>
								Project
							</label>
							<textarea
								name='project'
								cols={30}
								rows={10}
								className={styles.contact__form_input}
								placeholder='Write your project'
							/>
						</div>

						<button className={`${styles.button} ${styles.button__flex}`}>
							{' '}
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
