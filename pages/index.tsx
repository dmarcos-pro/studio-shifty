"use client"
import React from 'react'
import Head from "./head"
// import { Provider } from 'react-redux'
// import store from '../store'

// Importez les composants nécessaires pour la page Page
import Header from '@container/header'
import HeroBanner from '@container/heroBanner2'
import Presentation from '@container/presentation'
import Services from '@container/services'
import Projects from '@container/projects'
import Feedback from '@container/feedback'

const Page = () => {
  return (
    <>
      <Head>Le studio Shifty</Head>
      <HeroBanner />
      <main>
        <Services />
        <Presentation />
        <Projects />
        <Feedback />
      </main>
    </>
  )
}

export default Page