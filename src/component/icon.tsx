import React from "react";

type Props = {
    value: string
    children?: React.ReactNode
}

const Icon = (props: Props) => {
    const icon = props.value;
    return (
        <i>
            {props.children ? <span>{props.children}</span> : null}
            {icon === "arrow" && (
                <svg width="14" height="10" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 16L18 9M18 9L11 2M18 9L2 9" stroke="#FCC430" strokeWidth="2.41667" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            )}
            {icon === "bigArrow" && (
                <svg width="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 16L18 9M18 9L11 2M18 9L2 9" stroke="#FCC430" strokeWidth="2.41667" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            )}
            {icon === "angleRight" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="14.526" height="22.507" viewBox="0 0 14.526 22.507">
                    <path id="Icon_awesome-angle-right" data-name="Icon awesome-angle-right" d="M15.771,19.2,6.209,28.758a1.681,1.681,0,0,1-2.384,0L2.236,27.169a1.681,1.681,0,0,1,0-2.384l6.778-6.778L2.236,11.229a1.681,1.681,0,0,1,0-2.384l1.582-1.6a1.681,1.681,0,0,1,2.384,0L15.764,16.8a1.683,1.683,0,0,1,.007,2.391Z" transform="translate(-1.74 -6.746)" fill="#E67171" />
                </svg>
            )}
            {icon === "angleLeft" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="14.526" height="22.507" viewBox="0 0 14.526 22.507">
                    <path id="Icon_awesome-angle-right" data-name="Icon awesome-angle-right" d="M15.771,19.2,6.209,28.758a1.681,1.681,0,0,1-2.384,0L2.236,27.169a1.681,1.681,0,0,1,0-2.384l6.778-6.778L2.236,11.229a1.681,1.681,0,0,1,0-2.384l1.582-1.6a1.681,1.681,0,0,1,2.384,0L15.764,16.8a1.683,1.683,0,0,1,.007,2.391Z" transform="translate(16.266 29.254) rotate(180)" fill="#E67171" />
                </svg>
            )}
            {icon === "quote" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28.571" viewBox="0 0 40 28.571">
                    <path id="Icon_material-format-quote" data-name="Icon material-format-quote" d="M10.357,39.071h8.571l5.714-11.429V10.5H7.5V27.643h8.571Zm22.857,0h8.571L47.5,27.643V10.5H30.357V27.643h8.571Z" transform="translate(-7.5 -10.5)" fill="#fcc430" />
                </svg>
            )}
            {icon === "close" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="13.426" height="13.423" viewBox="0 0 13.426 13.423">
                    <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z" transform="translate(-11.285 -11.289)" />
                </svg>
            )}
            {icon === "menu" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="15.75" viewBox="0 0 27 15.75">
                    <g id="Icon_ionic-ios-menu" data-name="Icon ionic-ios-menu" transform="translate(-4.5 -10.125)">
                        <path id="Tracé_3" data-name="Tracé 3" d="M30.375,12.375H5.625A1.128,1.128,0,0,1,4.5,11.25h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,11.25h0A1.128,1.128,0,0,1,30.375,12.375Z" fill="#333" />
                        <path id="Tracé_4" data-name="Tracé 4" d="M30.375,19.125H5.625A1.128,1.128,0,0,1,4.5,18h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,18h0A1.128,1.128,0,0,1,30.375,19.125Z" fill="#333" />
                        <path id="Tracé_5" data-name="Tracé 5" d="M30.375,25.875H5.625A1.128,1.128,0,0,1,4.5,24.75h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,24.75h0A1.128,1.128,0,0,1,30.375,25.875Z" fill="#333" />
                    </g>
                </svg>

            )}

        </i>
    )
};

export default Icon;