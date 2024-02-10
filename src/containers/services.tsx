"use client"
import React, { useState, useRef, useEffect } from "react";
// import { useSwipeable } from 'react-swipeable';
import data from '../content.json';

import Service from "@component/service";
import Btn from "@component/btn";
import Modal from './modal';
import Simulator from './simulator/simulator';

// CSS 
import common from '@scss/common.module.scss';
import hp from '@scss/homepage.module.scss';
import grid from '@scss/grid.module.scss';
import animation from '@scss/animation.module.scss';


const Services = () => {

    const [isVisible, setIsVisible] = useState({
        title: false
    });

    const ref = {
        title: useRef(null),
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
                title: inView(ref.title)
            }));
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    const [openedModal, setOpenedModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const openModal = () => {
        setOpenedModal(true);
    }
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
                                key={`offer-${service.name}`}
                                category={service.category}
                                title={service.name}
                                link={service.link}
                                index={index}
                            />
                        )
                    })}
                </div>
                <div
                    className={`${common.boxCta} ${common.txtCenter}`}
                    onClick={(e) => { openModal(); }}
                >
                    <Btn color="blue">
                        Faire une première estimation de son projet
                    </Btn>
                </div>
            </div>
            {openedModal && (
                <Modal update={setOpenedModal}>
                    <Simulator />
                </Modal>
            )}
        </section>
    )
};

export default Services;