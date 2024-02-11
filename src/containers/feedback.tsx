"use client"
import React, { useState, useEffect, useRef } from "react"
import { useSwipeable } from 'react-swipeable'
import data from '../content.json'


import Icon from "@component/icon"

// CSS 
import common from '@scss/common.module.scss'
import hp from '@scss/homepage.module.scss'
import grid from '@scss/grid.module.scss'
import animation from '@scss/animation.module.scss'


const Feedback = () => {
    const [step, setStep] = useState<number>(0)
    const [feed, setFeed] = useState<number>(0)

    useEffect(() => {
        let feedbackCount = 0
        data.projects.all.forEach((project) => {
            if (project.feedback.text !== "") {
                feedbackCount++
            }
        })
        setFeed(feedbackCount)
    }, [])

    const maxStep = feed - 1

    const incrementStep = () => {
        if (step < maxStep) { setStep(step + 1) }
    }
    const decrementStep = () => {
        if (step !== 0) { setStep(step - 1) }
    }
    const swipeHandlers = useSwipeable({
        onSwipedLeft: incrementStep,
        onSwipedRight: decrementStep,
    })

    const [isVisible, setIsVisible] = useState<boolean>(false)

    const refBox = useRef<any>(null)

    const inView = (elementRef: React.RefObject<any>) => {
        if (elementRef.current) {
            const boundingBox = elementRef.current.getBoundingClientRect()
            return boundingBox.top < window.innerHeight - 150 && boundingBox.bottom >= 0
        }
        return false
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(inView(refBox))
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    return (
        <section className={`${hp.feedback}`}>
            <div
                className={`${common.container} ${hp.feedbackContainer}  ${animation.fadeUp} ${isVisible ? animation.animated : ''}`}
                ref={refBox}
            >
                <div className={`${common.txtCenter}`}>
                    <span className={`${common.tag}`}>{data.projects.feedback_tag}</span>
                </div>
                <div className={`${hp.feedbackItems} ${grid.grid1}`} data-step={step} style={{ left: -step * 100 + '%' }} {...swipeHandlers}>
                    {data.projects.all
                        .filter((project) => project.feedback.text !== "")
                        .map((project, index) => {
                            return (
                                <div key={`feedback-${index}`} className={`${hp.feedbackItem}`}>
                                    <div className={`${hp.feedbackContent}`}>
                                        <div dangerouslySetInnerHTML={{ __html: project.feedback.text }} />
                                        <div className={`${hp.feedbackWho}`}>
                                            <p>{project.feedback.who}</p>
                                            <p>{project.feedback.job} chez {project.brand}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                </div>

                <span onClick={() => { decrementStep() }} className={`link ${hp.feedbackPrev} ${step === 0 ? hp.disabled : ''}`}>
                    <Icon value="angleLeft" />
                </span>
                <span onClick={() => { incrementStep() }} className={`link ${hp.feedbackNext} ${step === maxStep ? hp.disabled : ''}`}>
                    <Icon value="angleRight" />
                </span>

            </div>
        </section>
    )
}

export default Feedback