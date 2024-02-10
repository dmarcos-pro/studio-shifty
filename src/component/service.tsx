import React, { useRef, useState, useEffect} from "react";

import Icon from "./icon";

// CSS
import hp from '@scss/homepage.module.scss';
import common from '@scss/common.module.scss';
import animation from '@scss/animation.module.scss';

const delays = ['delay2', 'delay4', 'delay6', 'delay8'];

const Service = (props) => {
    const [isVisible, setIsVisible] = useState({
        box: false
    });

    const ref = {
        box: useRef(null),
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
                box: inView(ref.box)
            }));
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    const delayClass = props.index < delays.length ? delays[props.index] : '';

    return (
        <div
            className={`link ${hp.serviceItem} ${animation[delayClass]} ${animation.fadeUp} ${isVisible.box ? animation.animated : ''}`}
            ref={ref.box}
        >
            <a href={`${props.link}`}>
                <div>
                    <span className={`${common.tag} ${hp.tag}`}>{props.category}</span>
                    <h3 dangerouslySetInnerHTML={{ __html: props.title }} />
                </div>
                <Icon value="bigArrow"></Icon>
            </a>
        </div>
    )
};

export default Service;