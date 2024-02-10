import React from "react";
import { useRouter } from 'next/router'

// CSS
import cta from '@scss/link.module.scss';

const Link = (props: any) => {
    const defaultLink = props.default ? true : false;
    return (
        <a href={`${props.url}`} className={defaultLink ? "" : `${cta.link} link`}>
            {props.children}
        </a>
    )
};

export default Link;