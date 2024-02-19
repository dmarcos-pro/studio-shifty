import React, { useState, useEffect } from "react";
import data from '../content.json';
import { useQuery } from 'react-query'
import { fetchServices, fetchNav } from '../../api/index'

import Link from "@component/link";
import Btn from "@component/btn";

// IMAGE
import Image from 'next/image'
import logo from '@images/logo.png';

// CSS
import common from '@scss/common.module.scss';
import grid from '@scss/grid.module.scss';
import styles from '@scss/footer.module.scss';

type Service = {
  id: string
  name: string
}

type Nav = {
  id: string
  name: string
  link: string
  category: string
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { data: navLegal } = useQuery('nav', () => fetchNav('legal'))
  const { data: services } = useQuery('services', () => fetchServices())

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${common.containerXs}`}>
        <div className={`${grid.grid} ${styles.grid}`}>
          <div>
            <figure className={`${styles.logo}`}>
              <Image width={120} height={80} style={{ width: '120px', height: 'auto' }} src={logo.src} alt={`logo-${data.short_name}`} />
            </figure>
            <p dangerouslySetInnerHTML={{ __html: data.baseline }} />
            <p className={styles.currentYear}>{data.short_name} © {currentYear}</p>
          </div>
          <div>
            <p>{data.services.subtitle}</p>
            {services && services.map((service: Service, index: number) => {
              return <Link key={`serviceFooter-${index}`} url={`${service.id}`}>
                <span dangerouslySetInnerHTML={{ __html: service.name }} />
              </Link>
            })}
          </div>
          <div>
            <p>Liens utiles</p>
            {navLegal && navLegal.map((item: Nav, index: number) => {
              return <Link key={`serviceFooter-${index}`} url={`${item.link}`}>
                <span dangerouslySetInnerHTML={{ __html: item.name }} />
              </Link>
            })}
          </div>
          <div className={styles.contact}>
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