import React from "react";

import { type BtnProps } from "@type/component"

// CSS
import btn from '@scss/btn.module.scss'

const Btn = (props: BtnProps) => {
  const color = btn[`${props.color}`];
  const size = props.size ? btn[`${props.size}`] : '';
  const icon = props.icon ? true : false;
  const noborder = props.noborder ? btn.noborder : '';
  const rotate = props.rotate ? btn.rotate : '';

  return (
    <a href={props.url} className={`${btn.btn} link ${color} ${size} ${noborder} ${rotate}`}>
      {props.children}
      {icon &&
        <svg width="16" height="14" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 16L18 9M18 9L11 2M18 9L2 9" stroke="#fff" strokeWidth="2.41667" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      }
    </a >
  )
};

export default Btn;