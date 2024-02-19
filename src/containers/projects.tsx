'use client'

import React, { useState, useEffect, useRef } from 'react'
import data from '../content.json'

import { useQuery } from 'react-query'
import { fetchProjects } from '../../api/index'

import Icon from '@component/icon'

// CSS
import common from '@scss/common.module.scss'
import animation from '@scss/animation.module.scss'
import hp from '@scss/homepage.module.scss'


type Refs = {
  title: React.RefObject<HTMLDivElement>;
}


type Project = {
  id: string
  brand: string
}

const Projects = () => {
  const { data: projects, isLoading, isError } = useQuery('projects', () => fetchProjects())

  const [activeInterval, setActiveInterval] = useState<boolean>(true)
  const [step, setStep] = useState<{ id: string; i: number }>({ id: "", i: 0 })
  const maxStep = projects ? projects.length - 1 : 0


  useEffect(() => {
    const brand = projects[0]?.id
    setStep({
      id: brand,
      i: 0,
    })
  }, [projects, setStep])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (activeInterval) {
      interval = setInterval(() => {
        setStep((prevStep) => {
          let newIndex = prevStep.i + 1

          if (newIndex > maxStep) {
            newIndex = 0
          }

          const nextStepId = projects[newIndex]?.id
          return { id: nextStepId, i: newIndex }
        })
      }, 4000)
    }

    return () => {
      if (activeInterval) {
        clearInterval(interval)
      }
    }
  }, [projects, activeInterval, maxStep])

  const nextProject = () => {
    setActiveInterval(false)
    if (step.i < maxStep) {
      const nextStepId = projects[step.i + 1].id
      setStep({ id: nextStepId, i: step.i + 1 })
    }
  }
  const prevProject = () => {
    setActiveInterval(false)
    if (step.i !== 0) {
      const prevStepId = projects[step.i - 1].id
      setStep({ id: prevStepId, i: step.i - 1 })
    }
  }
  const selectProject = (index: number) => {
    setActiveInterval(false)
    const stepId = projects[index].id
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
  const ref: Refs = {
    title: useRef<HTMLDivElement>(null),
  }

  const inView = (elementRef: React.RefObject<HTMLElement>) => {
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
  }, [ref.title])

  const getImage = (project: any) => {
    return require(`@images/project/mini/${project.id}.jpg`)
  }

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
          {projects && projects.map((project: Project, index: number) => {
            return (
              <div
                key={`project-title-${index}`}
                className={`${hp.projectsItem}`}
                onClick={() => { selectProject(index) }}
              >
                <span className={`${step.i === index ? hp.active : ''}`}>{project.brand}</span>
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
          {step.id && projects &&
            projects.map((project: Project, index: number) => {
              const img = getImage(project)
              return (
                <a
                  key={`project-mini-${index}`}
                  href={`/projets/${project.id}`}
                  className={`${step.i === index ? hp.active : ''}`}
                  style={{
                    backgroundImage: `url(${img.default.src})`,
                  }}
                >
                  {/* <div className={hp.projectsTag}>
                    {item.tag.map((cat, index) => {
                      return <span key={`project-cat-${index}`}>{cat}</span>
                    })}
                  </div> */}
                </a>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
