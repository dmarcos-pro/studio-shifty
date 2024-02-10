import React from "react";

import hp from '@scss/homepage.module.scss';

const Modal = (props) => {
  const closeModal = () => {
    props.update(false);
  }

  return (
    <div className={`${hp.modal}`}>
      <div>
        <span
          className={`${hp.modalClose}`}
          onClick={(e) => { closeModal(); }}
        >
          &#x2715;
          {/* <span>FERMER</span> */}
        </span>
        {props.children}
      </div>
    </div>
  )
};

export default Modal;