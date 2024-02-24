import React from "react"
import { type LinkProps } from "@type/component"

// CSS
import cta from '@scss/link.module.scss'



const Link = (props: LinkProps) => {
    const defaultLink = props.default ? true : false;
    return (
        <a href={`${props.url}`} className={defaultLink ? "" : `${cta.link} link`}>
            {props.children}
        </a>
    )
};

export default Link;