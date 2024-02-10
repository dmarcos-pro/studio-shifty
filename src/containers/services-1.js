import React, { useEffect, useState } from "react";
import { useSwipeable } from 'react-swipeable';
import data from '../content.json';

import Service from "../component/service";
import Icon from "../component/icon";
import Link from "../component/link";

// CSS 
import common from '../assets/scss/common.module.scss';
import hp from '../assets/scss/homepage.module.scss';


const Services = () => {
    const [step, setStep] = useState(0);
    const [itemVisible, setItemVisible] = useState(3);

    useEffect(() => {
        const updateItemVisible = () => {
            if (window.innerWidth >= 1300) {
                setItemVisible(3);
            }
            if (window.innerWidth < 1300 && window.innerWidth > 768) {
                setItemVisible(2);
            }
            if (window.innerWidth <= 768) {
                setItemVisible(1);
            }
        };
        updateItemVisible();
        window.addEventListener('resize', updateItemVisible);
        return () => {
            window.removeEventListener('resize', updateItemVisible);
        };
    }, []);

    const maxStep = data.services.offer.length - itemVisible;

    const incrementStep = () => {
        if (step < maxStep) { setStep(step + 1); }
    };
    const decrementStep = () => {
        if (step !== 0) { setStep(step - 1); }
    };
    const swipeHandlers = useSwipeable({
        onSwipedLeft: incrementStep,
        onSwipedRight: decrementStep,
    });
    return (
        <section className={`${hp.services} ${itemVisible === 1 ? hp.servicesResp : ''}`}>
            <div className={`${common.container} ${hp.serviceContainer}`}>
                <div className={`${common.txtCenter}`}>
                    <span className={`${common.tag} ${common.txt_orange}`}>{data.services.tag}</span>
                    <h2>{data.services.title}</h2>
                </div>

                <div className={`${hp.serviceItems}`} data-step={step} style={{ left: -step * (100 / itemVisible) + '%' }} {...swipeHandlers}>
                    {data.services.offer.map((service, index) => {
                        return (
                            <Service
                                key={`offer-${service.name}`}
                                category={service.category}
                                title={service.name}
                                link={service.link}
                                image={service.image}
                                item={itemVisible}
                                index={index} />
                        )
                    })}
                </div>
                <div className={`${hp.serviceNav}`}>
                    <div className={`${hp.serviceProgressBar}`}>
                        <span style={{
                            width: (100 / data.services.offer.length) * itemVisible + '%',
                            left: (100 / data.services.offer.length) * step + '%'
                        }}></span>
                    </div>
                    <div className={`${hp.serviceNavIcon}`}>
                        <span onClick={() => { decrementStep() }} className={`${step === 0 ? hp.disabled : ''}`}>
                            <Icon value="angleLeft" />
                        </span>
                        <span onClick={() => { incrementStep() }} className={`${step === maxStep ? hp.disabled : ''}`}>
                            <Icon value="angleRight" />
                        </span>
                    </div>
                </div>
                <div className={`${common.boxCta} ${common.txtRight} ${hp.simulator}`}>
                    <Link>
                        Utilisez notre simulateur pour une première estimation de votre projet
                        <Icon value="bigArrow" />
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default Services;