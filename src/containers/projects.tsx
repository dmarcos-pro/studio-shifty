'use client'

import React, { useState, useEffect, useRef } from 'react'
import data from '../content.json'

import Icon from '@component/icon'

// CSS
import common from '@scss/common.module.scss'
import animation from '@scss/animation.module.scss'
import hp from '@scss/homepage.module.scss'

const Projects = () => {
  const [activeInterval, setActiveInterval] = useState(true)
  const [step, setStep] = useState({ id: null, i: null })
  const maxStep = data.projects.all.length - 1

  useEffect(() => {
    var brand = data.projects.all[0].id
    setStep({
      id: brand,
      i: 0,
    })
  }, [data.projects.all])

  useEffect(() => {
    let interval
    if (activeInterval) {
      interval = setInterval(() => {
        setStep((prevStep) => {
          let newIndex = prevStep.i + 1

          if (newIndex > maxStep) {
            newIndex = 0
          }

          let nextStepId = data.projects.all[newIndex].id
          return { id: nextStepId, i: newIndex }
        })
      }, 3000)
    }

    return () => {
      if (activeInterval) {
        clearInterval(interval)
      }
    }
  }, [activeInterval])

  const nextProject = () => {
    setActiveInterval(false)
    if (step.i < maxStep) {
      const nextStepId = data.projects.all[step.i + 1].id
      setStep({ id: nextStepId, i: step.i + 1 })
    }
  }
  const prevProject = () => {
    setActiveInterval(false)
    if (step.i !== 0) {
      const prevStepId = data.projects.all[step.i - 1].id
      setStep({ id: prevStepId, i: step.i - 1 })
    }
  }
  const selectProject = (index) => {
    setActiveInterval(false)
    const stepId = data.projects.all[index].id
    setStep({ id: stepId, i: index })
  }
  const getShowIndices = () => {
    if (step.i === 0 || step.i === 1) {
      return Array.from({ length: 5 }, (_, i) => i)
    }
    if (step.i === maxStep - 1 || step.i === maxStep) {
      return Array.from({ length: 5 }, (_, i) => maxStep - 4 + i)
    }
    const showIndices = []
    for (let x = step.i - 2; x <= step.i + 2; x++) {
      if (x >= 0 && x <= maxStep) {
        showIndices.push(x)
      }
    }
    return showIndices
  }

  const [isVisible, setIsVisible] = useState({
    title: false,
  })

  const ref = {
    title: useRef(null),
  }

  const inView = (elementRef) => {
    if (elementRef.current) {
      const boundingBox = elementRef.current.getBoundingClientRect()
      return boundingBox.top < window.innerHeight - 150 && boundingBox.bottom >= 0
    }
    return false
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible((prev) => ({
        ...prev,
        title: inView(ref.title),
      }))
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section>
      <div className={`${common.container}`}>
        <div
          className={`${common.txtCenter} ${animation.fade3d} ${isVisible.title ? animation.animated : ''}`}
          ref={ref.title}
        >
          <span className={`${common.tag}`} dangerouslySetInnerHTML={{ __html: data.projects.tag }} />
          <h2 dangerouslySetInnerHTML={{ __html: data.projects.title }} />
        </div>
      </div>
      <div className={`${hp.projects}`}>
        <div className={`${hp.projectsList}`}>
          {data.projects.all.map((item, index) => {
            const showIndices = getShowIndices()
            const isShow = showIndices.includes(index)
            return (
              <div
                key={`project-title-${index}`}
                className={`${hp.projectsItem} ${isShow ? hp.show : ''}`}
                onClick={() => {
                  selectProject(index)
                }}
              >
                <span className={`${step.i === index ? hp.active : ''}`}>{item.brand}</span>
              </div>
            )
          })}
          <div className={`${hp.navCarouselProject}`}>
            <span
              className={`link ${hp.previous}`}
              onClick={() => {
                prevProject()
              }}
            >
              <Icon value="bigArrow" />
            </span>
            <span
              className={`link ${hp.next}`}
              onClick={() => {
                nextProject()
              }}
            >
              <Icon value="bigArrow" />
            </span>
          </div>
        </div>

        <div className={`${hp.projectsPicture} linkProject`}>
          {step.id &&
            data.projects.all.map((item, index) => {
              const img = require(`../../public/images/project/mini/${item.images.miniature}`)
              return (
                <a
                  key={`project-mini-${index}`}
                  href={`/projets/${item.id}`}
                  className={`${step.i === index ? hp.active : ''}`}
                  style={{
                    backgroundImage: `url(${img.default.src})`,
                  }}
                >
                  <div className={hp.projectsTag}>
                    {item.tag.map((cat, index) => {
                      return <span key={`project-cat-${index}`}>{cat}</span>
                    })}
                  </div>
                </a>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
