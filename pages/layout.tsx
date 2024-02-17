import React, { useState, useEffect } from 'react'

// container
import Header from '@container/header'
import Footer from '@container/footer'
import Icon from '@component/icon'

// CSS
import common from "@scss/common.module.scss"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState<boolean>(false)
  const [hoveredProject, setHoveredProject] = useState<boolean>(false)

  const [themeMode, setThemeMode] = useState<string>('dark')

  const handleMouseMove = (event: any) => {
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

  const handleColor = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark")
  }

  return (
    <div className={`App ${themeMode} ${hovered ? common.hovered : ""} ${hoveredProject ? common.hoveredProject : ""}`} onMouseMove={handleMouseMove}>
      <span
        className={`${common.mouse}`}
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
        }}
      />
      <Header />
      {children}
      <div
        className={`${common.changeMode} ${themeMode === "dark" ? common.darkMode : ''}`}
        onClick={handleColor}
      >
        <span></span>
      </div>
      <Footer />
    </div>
  )
}