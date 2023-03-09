import React from 'react'

// @ts-ignore
import styles from './App.module.scss'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Qualification from './components/qualification/Qualification'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'

function App() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<Home />
				<About />
				<Skills />
				<Services />
				<Qualification />
			</main>
		</div>
	)
}

export default App
