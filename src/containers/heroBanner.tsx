"use client"
import React, { useState, useEffect, useRef } from "react"
import data from '../content.json'


import Btn from "@component/btn"
import Link from "@component/link"
import ProgressBar from "@component/progressBar"

// IMG
import Image from 'next/image'
import rocket from '@images/heroBanner/rocket.png'
import shape from '@images/heroBanner/shape.png'
import smokeReactor from '@images/heroBanner/smokeReactor.png'
import cloud1 from '@images/heroBanner/cloud1.png'
import cloud2 from '@images/heroBanner/cloud2.png'
import cloud3 from '@images/heroBanner/cloud3.png'
import cloud4 from '@images/heroBanner/cloud4.png'

// CSS
import banner from '@scss/heroBanner.module.scss'
import common from '@scss/common.module.scss'
import grid from '@scss/grid.module.scss'
import animation from '@scss/animation.module.scss'

const HeroBanner = () => {
  const counterRef = useRef<HTMLDivElement>(null)
  const [counter, setCounter] = useState<number>(0)
  const sizeImgRef = 100
  const marginRef = 20
  const [increment, setIncrement] = useState<boolean>(true)
  const [mobile, setMobile] = useState<boolean>(false)
  const [feedback, setFeedback] = useState<number>(0)

  const [project, setProject] = useState<number>(0)
  const [branding, setBranding] = useState<number>(0)
  const [digital, setDigital] = useState<number>(0)
  const [socialMedia, setSocialMedia] = useState<number>(0)

  useEffect(() => {
    const imgWidth = data.projects.all.length * (sizeImgRef + marginRef)
    const sizeCounterBox = counterRef.current ? counterRef?.current?.clientWidth : 0

    const feedbackLength = data.projects.all.filter((project) => project.feedback.text !== "").length
    setFeedback(feedbackLength)

    const projectLength = data.projects.all.length
    setProject(projectLength)

    const brandingLength = data.projects.all.filter(item => item.category.includes('Branding')).length
    setBranding(100 * (brandingLength / project))

    const digitalLength = data.projects.all.filter(item => item.category.includes('Digital')).length
    setDigital(100 * (digitalLength / project))

    const mediaLength = data.projects.all.filter(item => item.category.includes('Media')).length
    setSocialMedia(100 * (mediaLength / project))


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
    }, 10)

    const updateDevice = () => {
      setMobile(window.innerWidth <= 768 ? true : false)
    }
    updateDevice()
    window.addEventListener('resize', updateDevice)

    return () => {
      window.removeEventListener('resize', updateDevice)
      clearInterval(interval)

    }
  }, [counter, data.projects.all.length, sizeImgRef, increment])

  const serviceItem = data.navigation.find(item => item.id === 'services')
  let content
  content = (
    <div className={banner.main}>
      <div className={`${banner.content} ${common.container}`}>
        <div className={`${grid.grid} ${grid.grid2} ${grid.lg1}`}>
          <div className={`${banner.title} ${animation.animated} ${animation.delay5} ${animation.fadeUp}`}>
            <h1 dangerouslySetInnerHTML={{ __html: data.catch_phrase }} />
            <p dangerouslySetInnerHTML={{ __html: data.about_us.short }} />

          </div>
          <div>
            <div className={`${banner.picture}`}>
              <figure>
                <img className={`${banner.mainPicture} ${animation.animated} ${animation.fromLeft}`} src={rocket.src} alt="Rocket" />
                <span className={`${animation.animated} ${animation.fade} ${animation.delay10}`}>
                  <img className={`${banner.smokeReactor}`} src={smokeReactor.src} alt="SmokeReactor" />
                  <img className={`${banner.shape}`} src={shape.src} alt="" />
                  <img className={`${banner.cloud1}`} src={cloud1.src} alt="" />
                  <img className={`${banner.cloud2}`} src={cloud2.src} alt="" />
                  <img className={`${banner.cloud3}`} src={cloud3.src} alt="" />
                  <img className={`${banner.cloud4}`} src={cloud4.src} alt="" />
                </span>
              </figure>
            </div>
            <div className={`${grid.grid3} ${grid.sm2} ${banner.tips}`}>
              <div className={`${animation.animated} ${animation.delay10} ${animation.fade}`}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="31.344" height="30" viewBox="0 0 31.344 30"><path id="Icon_awesome-star" data-name="Icon awesome-star" d="M15.432,1.043,11.606,8.8,3.047,10.047a1.876,1.876,0,0,0-1.037,3.2L8.2,19.281,6.738,27.805a1.874,1.874,0,0,0,2.718,1.974l7.657-4.025,7.657,4.025a1.875,1.875,0,0,0,2.718-1.974l-1.465-8.524,6.193-6.034a1.876,1.876,0,0,0-1.037-3.2L22.62,8.8,18.795,1.043a1.876,1.876,0,0,0-3.363,0Z" transform="translate(-1.441 0.001)" fill="#434052" /></svg>
                  <div>
                    <span>+10</span>
                    Années d'expérience
                  </div>
                </div>
              </div>
              <div className={`${animation.animated} ${animation.delay15} ${animation.fade}`}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="30" viewBox="0 0 22.5 30"><path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M10.094,29.395C1.58,17.053,0,15.786,0,11.25a11.25,11.25,0,1,1,22.5,0c0,4.536-1.58,5.8-10.094,18.145a1.407,1.407,0,0,1-2.312,0ZM11.25,15.937A4.687,4.687,0,1,0,6.562,11.25,4.687,4.687,0,0,0,11.25,15.937Z" fill="#434052" /></svg>
                  <div>
                    <span>Montpellier (34)</span>
                    Et partout en France
                  </div>
                </div>
              </div>
              <div className={`${animation.animated} ${animation.delay20} ${animation.fade}`}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="31.083" height="25" viewBox="0 0 31.083 25"><path id="Icon_metro-paper-plane" data-name="Icon metro-paper-plane" d="M33.947,5.61,4.123,16.12c-.48.169-.586.583-.017.809L10.519,19.5l3.8,1.522S32.626,7.578,32.873,7.4s.537.16.356.356-13.3,14.38-13.3,14.38v0l-.763.85,1.012.544s7.855,4.23,8.415,4.53a.861.861,0,0,0,1.27-.564c.167-.72,4.806-20.711,4.909-21.157.133-.579-.25-.932-.829-.728ZM14.285,30.15c0,.416.235.532.559.238.424-.387,4.814-4.326,4.814-4.326l-5.373-2.777V30.15Z" transform="translate(-3.72 -5.552)" fill="#434052" /></svg>

                  <div>
                    <span>100%</span>
                    Devis gratuit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${banner.bottom}`}>
        <div className={`${common.container}`}>
          <aside className={`${animation.delay20} ${animation.animated} ${animation.fadeUp} `}>
            <div>
              <p>Recommandations ({feedback})</p>
              <div className={`${banner.feedback}`}>
                {data.projects.all
                  .filter((project) => project.feedback.text !== "")
                  .slice(0, 4)
                  .map((project, index) => {
                    const img = require(`@images/${project.feedback.image}`)
                    return (
                      <div key={`feedback-${index}`} className={`${banner.feedbackImage}`}>
                        <Image width={50} src={img} alt="Picture of the author" />
                      </div>
                    )
                  }
                  )}
                <div className={`${banner.feedbackImage}`}>
                  + {feedback - 4}
                </div>
              </div>
            </div>
            <div>
              <p>Tous nos projets</p>
              <div className={`${banner.projectDetail}`}>
                <div>
                  <span>Branding</span>
                  <span>{Math.round(branding)}%</span>
                </div>
                <ProgressBar start={0} end={Math.round(branding)} color="#988BDD" />
              </div>
              <div className={`${banner.projectDetail}`}>
                <div>
                  <span>Digital</span>
                  <span>{Math.round(digital)}%</span>
                </div>
                <ProgressBar start={0} end={Math.round(digital)} color="#FC7A57" />
              </div>
              <div className={`${banner.projectDetail}`}>
                <div>
                  <span>Social Media</span>
                  <span>{Math.round(socialMedia)}%</span>
                </div>
                <ProgressBar start={0} end={Math.round(socialMedia)} color="#FCC430" />
              </div>
            </div>
          </aside>
          <div className={`${banner.ref}`} ref={counterRef}>
            <div className={banner.counter} >
              <div style={{ left: `-${counter}px` }}>
                {data.projects.all.map((item, index) => {
                  const img = require(`@images/project/logo/${item.images.logo}`)
                  return (
                    <figure key={`ref-${item.id}-${index}`} style={{ flex: `1 0 ${sizeImgRef}px`, marginRight: marginRef }}>
                      <Link url={`/projets/${item.id}`} default>
                        <Image
                          height={48}
                          width={sizeImgRef}
                          src={img}
                          alt={item.brand}
                        />
                      </Link>
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className={`${banner.heroBanner}`}>
      {content}
    </div>
  )
}

export default HeroBanner
