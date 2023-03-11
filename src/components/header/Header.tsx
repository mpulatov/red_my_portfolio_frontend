import React, { FC, useState } from 'react'
import {
	AiOutlineAppstore,
	AiOutlineCloseCircle,
	AiOutlineHome,
	AiOutlineUser
} from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import {
	MdOutlineHomeRepairService,
	MdOutlineImage,
	MdOutlineSendToMobile
} from 'react-icons/md'
import { Link } from 'react-router-dom'

// @ts-ignore
import styles from './Header.module.scss'

type Props = {}

const Header: FC = (props: Props) => {
	// TODO: Change Background Header
	window.addEventListener('scroll', function () {
		const header = this.document.querySelector('.header')
		// TODO: When the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag.
		if (this.scrollY >= 80) {
			// @ts-ignore
			header.classList.add(styles.scroll__header)
		} else {
			// @ts-ignore
			header.classList.remove(styles.scroll__header)
		}
	})

	//  TODO: Change Toggle
	const [toggle, setToggle] = useState(false)
	const [navActive, setNavActive] = useState('#home')

	return (
		<header className={`${styles.header} header`}>
			<nav className={`${styles.nav} ${styles.container}`}>
				<Link to='/' className={styles.nav__logo}>
					MP
				</Link>

				<div
					className={
						toggle
							? `${styles.nav__menu} ${styles.show__menu}`
							: `${styles.nav__menu}`
					}
				>
					<ul className={`${styles.nav__list} ${styles.grid}`}>
						<li className={styles.nav__item}>
							<Link
								to='#home'
								onClick={() => setNavActive('#home')}
								className={
									navActive === '#home'
										? `${styles.nav__link} ${styles.active__link}`
										: `${styles.nav__link}`
								}
							>
								<AiOutlineHome className={styles.nav__icon} /> Home
							</Link>
						</li>

						<li className={styles.nav__item}>
							<Link
								to='#about'
								onClick={() => setNavActive('#about')}
								className={
									navActive === '#about'
										? `${styles.nav__link} ${styles.active__link}`
										: `${styles.nav__link}`
								}
							>
								<AiOutlineUser className={styles.nav__icon} /> About
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link
								to='#skills'
								onClick={() => setNavActive('#skills')}
								className={
									navActive === '#skills'
										? `${styles.nav__link} ${styles.active__link}`
										: `${styles.nav__link}`
								}
							>
								<GiSkills className={styles.nav__icon} />
								Skills
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link
								to='#service'
								onClick={() => setNavActive('#service')}
								className={
									navActive === '#service'
										? `${styles.nav__link} ${styles.active__link}`
										: `${styles.nav__link}`
								}
							>
								<MdOutlineHomeRepairService className={styles.nav__icon} />{' '}
								Service
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link
								to='#portfolio'
								onClick={() => setNavActive('#portfolio')}
								className={
									navActive === '#portfolio'
										? `${styles.nav__link} ${styles.active__link}`
										: `${styles.nav__link}`
								}
							>
								<MdOutlineImage className={styles.nav__icon} /> Portfolio
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link
								to='#contact'
								onClick={() => setNavActive('#contact')}
								className={
									navActive === '#contact'
										? `${styles.nav__link} ${styles.active__link}`
										: `${styles.nav__link}`
								}
							>
								<MdOutlineSendToMobile className={styles.nav__icon} /> Contact
							</Link>
						</li>
					</ul>

					<AiOutlineCloseCircle
						className={styles.nav__close}
						onClick={() => setToggle(!toggle)}
					/>
				</div>
				<div className={styles.nav__toggle} onClick={() => setToggle(!toggle)}>
					<AiOutlineAppstore />
				</div>
			</nav>
		</header>
	)
}

export default Header
