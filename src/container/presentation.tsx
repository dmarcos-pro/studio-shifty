"use client"

import React, { useRef, useEffect, useState } from "react"
import { type PresentationRefs } from "@type/container"
import content from '@contentJson'

// Module
import Btn from "@component/btn"

// CSS 
import common from '@scss/common.module.scss'
import hp from '@scss/homepage.module.scss'
import animation from '@scss/animation.module.scss'

const Presentation = () => {

  const [isVisible, setIsVisible] = useState({
    box: false,
    cta: false
  })

  const ref: PresentationRefs = {
    box: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
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
        box: ref.box.current ? inView(ref.box) : false,
        cta: ref.box.current ? inView(ref.cta) : false,
      }))
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  })

  return (
    <section className={`${hp.presentation}`}>
      <div
        className={`${common.container} ${animation.fadeUp} ${isVisible.box ? animation.animated : ''}`}
        ref={ref.box}
      >
        <div className={`${common.txtCenter}`}>
          <span className={`${common.tag}`} dangerouslySetInnerHTML={{ __html: content.about.tag }} />
          <div dangerouslySetInnerHTML={{ __html: content.about.desc }} />
          <div
            className={`${common.boxCta} ${animation.fadeUp} ${isVisible.cta ? animation.animated : ''}`}
            ref={ref.cta}
          >
            <Btn rotate size="large" url="/le-studio">
              {content.about.cta}
            </Btn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation