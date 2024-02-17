"use client"
import React, { useState, useEffect, useRef } from "react"
import data from '../content.json'


import Btn from "@component/btn"
import Link from "@component/link"

// IMG
import Image from 'next/image'
import logo from '@images/logo.png'

// CSS
import banner from '@scss/heroBanner.module.scss'
import common from '@scss/common.module.scss'
import animation from '@scss/animation.module.scss'

const HeroBanner = () => {
  const counterRef = useRef<HTMLDivElement>(null)
  const [counter, setCounter] = useState<number>(0)
  const sizeImgRef = 100
  const marginRef = 20
  const [increment, setIncrement] = useState<boolean>(true)
  const [mobile, setMobile] = useState<boolean>(false)


  useEffect(() => {
    const imgWidth = data.projects.all.length * (sizeImgRef + marginRef)
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
  }, [counter, sizeImgRef, increment])

  const contactItems = data.navigation.filter(item => item.id.includes('contact'))
  const getImage = (item: any) => {
    return require(`@images/project/logo/${item.images.logo}`);
  }

  return (
    <div className={`${banner.heroBanner}`}>
      <div className={`${common.containerXs} ${common.txtCenter} ${banner.title} ${animation.animated} ${animation.delay5} ${animation.fadeUp}`}>
        <figure className={banner.logo}>
          <Image width={120} height={80} layout="responsive" src={logo.src} alt={`${data.name}`} />
        </figure>
        <h1 dangerouslySetInnerHTML={{ __html: data.catch_phrase }} />
        <p dangerouslySetInnerHTML={{ __html: data.about_us.short }} />
        <div className={common.my4}>
          {contactItems.map((item, index) => {
            return (
              <React.Fragment key={`navHeader-${index}`}>
                <Btn icon url={`${item.link}`}>
                  {item.name}
                </Btn>
              </React.Fragment>
            )
          })}
        </div>
        <div className={`${banner.ref} ${common.my4}`} ref={counterRef}>
          <div className={banner.counter} >
            <div style={{ left: `-${counter}px` }}>
              {data.projects.all.map((item, index) => {
                const img = getImage(item)
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
      {/* <video autoPlay loop id="video" style={{ maxWidth: '100%', height: 'auto' }}>
        <source src={`../video/hp.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  )
}

export default HeroBanner