import React from 'react'
import Head from "../head"

import HeroBanner from '@container/homepage/heroBanner'
import Studio from '@container/studio'
import Services from '@container/services'


const About = () => {
  return (
    <>
      <Head>Le studio</Head>
      <HeroBanner />
      <main>
        <Studio />
        <Services />
      </main>
    </>
  )
}

export default About
