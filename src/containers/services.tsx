"use client"
import React, { useState, useRef, useEffect, RefObject } from "react"
// import { useSwipeable } from 'react-swipeable'
import data from '../content.json'

import Service from "@component/service"
// import Modal from './modal'

// CSS 
import common from '@scss/common.module.scss'
import hp from '@scss/homepage.module.scss'
import grid from '@scss/grid.module.scss'
import animation from '@scss/animation.module.scss'

const Services = () => {

    const [isVisible, setIsVisible] = useState({
        title: false
    })

    const ref = {
        title: useRef(null),
    }

    const inView = (elementRef: RefObject<HTMLElement>) => {
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
                title: inView(ref.title)
            }))
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    return (
        <section className={`${hp.services}`}>
            <div className={`${common.container} ${hp.serviceContainer}`}>
                <div
                    className={`${common.txtCenter} ${animation.fade3d} ${isVisible.title ? animation.animated : ''}`}
                    ref={ref.title}
                >
                    <span className={`${common.tag} ${common.txt_salmon}`}>{data.services.tag}</span>
                    <h2>{data.services.title}</h2>
                </div>

                <div className={`${hp.serviceItems} ${grid.hasGutter} ${grid.grid4} ${grid.lg2} ${grid.sm1}`}>
                    {data.services.offer.map((service, index) => {
                        return (
                            <Service
                                key={`offer-${service.id}`}
                                category={service.category}
                                title={service.name}
                                id={service.id}
                                index={index}
                            />
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Services