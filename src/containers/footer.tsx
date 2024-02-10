import React from "react";
import data from '../content.json';

import Link from "@component/link";
import Btn from "@component/btn";

// IMAGE
import Image from 'next/image'
import logo from '@images/logo.png';

// CSS
import common from '@scss/common.module.scss';
import grid from '@scss/grid.module.scss';
import footer from '@scss/footer.module.scss';

const Footer = () => {
    const legalItems = data.navigation.filter(item => item.category.includes('legal'));
    const socialItems = data.navigation.filter(item => item.category.includes('social'));
    const currentYear = new Date().getFullYear();
    return (
        <footer className={`${common.bgBlue}`}>
            <div className={`${common.containerXs}`}>
                <div className={`${grid.grid} ${footer.grid}`}>
                    <div>
                        <figure className={`${footer.logo}`}>
                            <img src={logo.src} alt={`logo-${data.short_name}`} />
                        </figure>
                        <p dangerouslySetInnerHTML={{ __html: data.about_us.short }} />
                        <p className={footer.currentYear}>{data.short_name} © {currentYear}</p>
                    </div>
                    <div>
                        <p>{data.services.subtitle}</p>
                        {data.services.offer.map((item, index) => {
                            return <Link key={`serviceFooter-${index}`} url={`${item.link}`}>
                                <span dangerouslySetInnerHTML={{ __html: item.name }} />
                            </Link>
                        })}
                    </div>
                    <div>
                        <p>Liens utiles</p>
                        {legalItems.map((item, index) => {
                            return <Link key={`serviceFooter-${index}`} url={`${item.link}`}>
                                <span dangerouslySetInnerHTML={{ __html: item.name }} />
                            </Link>
                        })}
                    </div>
                    <div className={footer.contact}>
                        <p>Nous contacter</p>
                        <div>
                            <p>Vous avez un projet ou une question à poser&nbsp;? Le studio sera ravi de vous aider.</p>
                            <Btn color="white" url="" icon>Nous contacter</Btn>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;