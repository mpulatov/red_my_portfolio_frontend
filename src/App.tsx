import React from 'react'

// @ts-ignore
import styles from './App.module.scss'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<Home />
			</main>
		</div>
	)
}

export default App
