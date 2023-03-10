import React from 'react'
// import required modules
import { Pagination } from 'swiper'
// Import Swiper React components
// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
// @ts-ignore
import styles from './Testimonials.module.scss'
import { Data } from './dummyData'

const Testimonials = () => {
	return (
		<section
			className={`${styles.testimonial} ${styles.section} ${styles.container}`}
		>
			<h2 className={styles.section__title}>Testimonials</h2>
			<span className={styles.section__subtitle}>My introduction</span>

			<Swiper
				className={styles.testimonial__container}
				rewind={true}
				loop={true}
				grabCursor={true}
				speed={600}
				spaceBetween={14}
				pagination={{
					clickable: true
				}}
				modules={[Pagination]}
				// navigation={true}
			>
				{Data.map(user => (
					<SwiperSlide className={`${styles.testimonial__card}`} key={user.id}>
						<img src={user.image} alt='' className={styles.testimonial__img} />

						<h3 className={styles.testimonial__name}>{user.title}</h3>
						<p className={styles.testimonial__description}>
							{user.description}
						</p>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Testimonials
