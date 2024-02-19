"use client"
import React, { useState, useEffect, useRef } from "react"
import data from '../content.json'
import { useQuery } from 'react-query'
import { fetchProjects } from '../../api/index'

import Btn from "@component/btn"
import Link from "@component/link"

// IMG
import Image from 'next/image'
import logo from '@images/logo.png'

// CSS
import banner from '@scss/heroBanner.module.scss'
import common from '@scss/common.module.scss'
import animation from '@scss/animation.module.scss'

const name = process.env.NAME as string

type Project = {
  id: string
  brand: string
}

const HeroBanner = () => {
  const counterRef = useRef<HTMLDivElement>(null)
  const [counter, setCounter] = useState<number>(0)
  const sizeImgRef = 100
  const marginRef = 20
  const [increment, setIncrement] = useState<boolean>(true)
  const [mobile, setMobile] = useState<boolean>(false)

  const { data: projects, isLoading, isError } = useQuery('projects', () => fetchProjects())

  useEffect(() => {
    if (!isLoading && !isError && projects) {
      const imgWidth = projects.length * (sizeImgRef + marginRef)
      const sizeCounterBox = counterRef.current ? counterRef?.current?.clientWidth : 0

      const interval = setInterval(() => {
        if (increment) {
          setCounter((prevCounter) => prevCounter + 1)
          if (counter >= (imgWidth - sizeCounterBox)) {
            setIncrement(false)
          }
        } else {
          setCounter((prevCounter) => prevCounter - 1)
          if (counter <= 0) {
            setIncrement(true)
          }
        }
      }, 30)

      const updateDevice = () => {
        setMobile(window.innerWidth <= 768 ? true : false)
      }
      updateDevice()
      window.addEventListener('resize', updateDevice)

      return () => {
        window.removeEventListener('resize', updateDevice)
        clearInterval(interval)
      }
    }
  }, [isLoading, isError, projects, counter, sizeImgRef, increment])

  const getImage = (product: any) => {
    return require(`@images/project/logo/${product.id}.png`);
  }

  return (
    <div className={`${banner.heroBanner}`}>
      <div className={`${common.containerXs} ${common.txtCenter} ${banner.title} ${animation.animated} ${animation.delay5} ${animation.fadeUp}`}>
        <figure className={banner.logo}>
          <Image
            width={120} height={80} style={{ width: '120px', height: 'auto' }}
            src={logo.src}
            alt={`Logo ${name}`}
          />
        </figure>
        <h1 dangerouslySetInnerHTML={{ __html: data.catch_phrase }} />
        <p dangerouslySetInnerHTML={{ __html: data.baseline }} />
        <div className={common.my4}>
          <Btn icon url={`${data.contact.url}`}>
            {data.contact.content}
          </Btn>
        </div>
        <div className={`${banner.ref} ${common.my4}`} ref={counterRef}>
          <div className={banner.counter} >
            <div style={{ left: `-${counter}px` }}>
              {projects && projects.map((project: Project, index: number) => {
                const img = getImage(project)
                return (
                  <figure key={`ref-${project.id}-${index}`} style={{ flex: `1 0 ${sizeImgRef}px`, marginRight: marginRef }}>
                    <Link url={`/projets/${project.id}`} default>
                      <Image
                        height={48}
                        width={sizeImgRef}
                        src={img}
                        alt={project.brand}
                      />
                    </Link>
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <video autoPlay loop id="video" style={{ maxWidth: '100%', height: 'auto' }}>
        <source src={`../video/hp.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  )
}

export default HeroBanner
