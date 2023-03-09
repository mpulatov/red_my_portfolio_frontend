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
	const [toggle, setToggle] = useState(false)
	return (
		<header className={styles.header}>
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
								to='#'
								className={`${styles.nav__link} ${styles.active__link}`}
							>
								<AiOutlineHome className={styles.nav__icon} /> Home
							</Link>
						</li>

						<li className={styles.nav__item}>
							<Link
								to='#'
								className={`${styles.nav__link} ${styles.active__link}`}
							>
								<AiOutlineUser className={styles.nav__icon} /> About
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link
								to='#'
								className={`${styles.nav__link} ${styles.active__link}`}
							>
								<GiSkills className={styles.nav__icon} />
								Skills
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link
								to='#'
								className={`${styles.nav__link} ${styles.active__link}`}
							>
								<MdOutlineHomeRepairService className={styles.nav__icon} />{' '}
								Service
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link
								to='#'
								className={`${styles.nav__link} ${styles.active__link}`}
							>
								<MdOutlineImage className={styles.nav__icon} /> Portfolio
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link
								to='#'
								className={`${styles.nav__link} ${styles.active__link}`}
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
