import React from 'react'

// @ts-ignore
import styles from './App.module.scss'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<Home />
				<About />
			</main>
		</div>
	)
}

export default App
