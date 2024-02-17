import React from "react";
import { useRouter } from 'next/router'

// CSS
import cta from '@scss/link.module.scss';

type Props = {
    default?: boolean
    url: string
    children: React.ReactNode
    className?: React.ReactNode
}

const Link = (props: Props) => {
    const defaultLink = props.default ? true : false;
    return (
        <a href={`${props.url}`} className={defaultLink ? "" : `${cta.link} link`}>
            {props.children}
        </a>
    )
};

export default Link;