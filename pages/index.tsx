"use client"
import React, { useState, useEffect } from 'react';
import Head from "./head"
// import { Provider } from 'react-redux';
// import store from '../store';

// Importez les composants nécessaires pour la page Page
import Header from '../src/containers/header';
import HeroBanner from '../src/containers/heroBanner';
import Presentation from '../src/containers/presentation';
import Services from '../src/containers/services';
import Projects from '../src/containers/projects';
import Feedback from '../src/containers/feedback';
import Footer from '../src/containers/footer';

// CSS
import common from "@scss/common.module.scss";

const Page = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(false)

  const handleMouseMove = (event:any) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY })
  }

  useEffect(() => {
    const links = document.querySelectorAll('.link')
    const handleMouseEnter = () => { setHovered(true) }
    const handleMouseLeave = () => { setHovered(false) }
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter)
      link.addEventListener('mouseleave', handleMouseLeave)
    })

    const linksProject = document.querySelectorAll('.linkProject')
    const handleMouseEnterProject = () => { setHoveredProject(true) }
    const handleMouseLeaveProject = () => { setHoveredProject(false) }
    linksProject.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterProject)
      link.addEventListener('mouseleave', handleMouseLeaveProject)
    })

    // Clean up the event listeners
    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter)
        link.removeEventListener('mouseleave', handleMouseLeave)
      })
      linksProject.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterProject)
        link.removeEventListener('mouseleave', handleMouseLeaveProject)
      })
    }
  }, [])

  return (
    <div className={`App ${hovered ? common.hovered : ""} ${hoveredProject ? common.hoveredProject : ""}`} onMouseMove={handleMouseMove}>
      <Head>Le studio Shifty</Head>
      <span
        className={`${common.mouse}`}
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
        }} />
      <Header />
      <HeroBanner />
      <main>
        <Presentation />
        <Services />
        <Projects />
        <Feedback />
      </main>
      <Footer />
    </div>
  )
}

export default Page;