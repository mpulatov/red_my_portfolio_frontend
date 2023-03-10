import React from 'react'

// @ts-ignore
import styles from './App.module.scss'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Qualification from './components/qualification/Qualification'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Testimonials from './components/testimonials/Testimonials'

function App() {
	return (
		<div>
			<Header />
			<main className={styles.main}>
				<Home />
				<About />
				<Skills />
				<Services />
				<Qualification />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default App
