import React, { useRef, useState, useEffect } from "react"
import { type ServiceProps, type ServiceAnim } from "@type/component"

import Icon from "./icon"

import Link from "next/link"

// CSS
import hp from '@scss/homepage.module.scss'
import common from '@scss/common.module.scss'
import animation from '@scss/animation.module.scss'

const delays = ['delay2', 'delay4', 'delay6', 'delay8']



const Service = (props: ServiceProps) => {

  const [isVisible, setIsVisible] = useState<ServiceAnim>({
    box: false
  })

  const ref = {
    box: useRef<HTMLDivElement>(null),
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
        box: inView(ref.box)
      }))
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  })

  const delayClass = props.index < delays.length ? delays[props.index] : ''

  return (
    <div
      className={`link ${hp.serviceItem} ${animation[delayClass]} ${animation.fadeUp} ${isVisible.box ? animation.animated : ''}`}
      ref={ref.box}
    >
      <Link href={`/services/${props.id}`}>
        <div>
          <span className={`${common.tag} ${hp.tag}`}>{props.category}</span>
          <h3 dangerouslySetInnerHTML={{ __html: props.title }} />
        </div>
        <Icon value="bigArrow"></Icon>
      </Link>
    </div>
  )
}

export default Service