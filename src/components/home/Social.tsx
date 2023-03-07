import React, { FC } from 'react'
import { SocialIcon } from 'react-social-icons'

// @ts-ignore
import styles from './Home.module.scss'

type Props = {}
const Social: FC = (props: Props) => {
	return (
		<div className={styles.home__social}>
			<SocialIcon
				network='instagram'
				fgColor='gray'
				bgColor='transparent'
				style={{ height: 50, width: 50 }}
				className={styles.home__social_icon}
			/>
			<SocialIcon
				network='github'
				fgColor='gray'
				bgColor='transparent'
				style={{ height: 50, width: 50 }}
				className={styles.home__social_icon}
			/>

			<SocialIcon
				network='telegram'
				fgColor='gray'
				bgColor='transparent'
				style={{ height: 50, width: 50 }}
				className={styles.home__social_icon}
			/>
		</div>
	)
}

export default Social
