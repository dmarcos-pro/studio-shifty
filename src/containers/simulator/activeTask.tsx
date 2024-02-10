import React from "react";

import simulator from '@scss/simulator.module.scss';

const ActiveTask = (props) => {
    return (
        <div className={simulator.main_info}>
            <div>
                <span>{props.category}</span>
                <p><b>{props.name}</b></p>
                {/* <span>avec {props.feedback} retour{props.feedback !== '1' && 's'}</span> */}
            </div>
            <div><b>{props.price}&nbsp;€</b></div>
        </div>
    );
};

export default ActiveTask;