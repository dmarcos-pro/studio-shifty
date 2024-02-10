"use client"
import React, { useRef, useEffect, useState } from "react";

// CONTENT JSON
import data from '../content.json';

// Module
import Btn from "@component/btn";

// CSS 
import common from '@scss/common.module.scss';
import hp from '@scss/homepage.module.scss';
import animation from '@scss/animation.module.scss';


const Presentation = () => {

    const [isVisible, setIsVisible] = useState({
        box: false,
        cta: false
    });

    const ref = {
        box: useRef(null),
        cta: useRef(null),
    };

    const inView = (elementRef) => {
        if (elementRef.current) {
            const boundingBox = elementRef.current.getBoundingClientRect();
            return boundingBox.top < window.innerHeight - 150 && boundingBox.bottom >= 0;
        }
        return false;
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible((prev) => ({
                ...prev,
                box: inView(ref.box),
                cta: inView(ref.cta),
            }));
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    const studioItem = data.navigation.find(item => item.id === 'studio');

    return (
        <section className={`${hp.presentation}`}>
            <div
                className={`${common.container} ${animation.fadeUp} ${isVisible.box ? animation.animated : ''}`}
                ref={ref.box}
            >
                <div className={`${common.txtCenter}`}>
                    <span className={`${common.tag}`} dangerouslySetInnerHTML={{ __html: data.about_us.tag }} />
                    <div dangerouslySetInnerHTML={{ __html: data.about_us.desc }} />
                    <div
                        className={`${common.boxCta} ${animation.fadeUp} ${isVisible.cta ? animation.animated : ''}`}
                        ref={ref.cta}
                    >
                        <Btn color="blue" rotate size="large" url={`${studioItem.link}`}>
                            {data.about_us.cta}
                        </Btn>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Presentation;