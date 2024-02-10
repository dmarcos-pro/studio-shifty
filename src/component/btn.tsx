import React from "react";

// CSS
import btn from '@scss/btn.module.scss';

const Btn = (props) => {
    let color = btn[`${props.color}`];
    let size = props.size ? btn[`${props.size}`] : '';
    let icon = props.icon ? true : false;
    let noborder = props.noborder ? btn.noborder : '';
    let rotate = props.rotate ? btn.rotate : '';

    return (
        <a href={props.url} className={`${btn.btn} link ${color} ${size} ${noborder} ${rotate}`}>
            {props.children}
            {icon && (
                props.color === "white" ? (
                    <svg width="16" height="14" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 16L18 9M18 9L11 2M18 9L2 9" stroke="#fff" strokeWidth="2.41667" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                ) : (
                    <svg width="16" height="14" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 16L18 9M18 9L11 2M18 9L2 9" stroke="#434052" strokeWidth="2.41667" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                )

            )}
        </a >
    )
};

export default Btn;