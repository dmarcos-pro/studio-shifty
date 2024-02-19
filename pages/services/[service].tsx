import Head from "../head"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import data from '../../src/content.json'

import styles from '@scss/article.module.scss'
import common from '@scss/common.module.scss'

const baseUrlServer = process.env.SERVER_URL as string

type Service = {
  id: string
  name: string
  category: string
  title: string
  resume: string
  content_title: string
  content_text: string
  picture_url: string
  picture_type: string

}

const ServicePage = () => {
  const router = useRouter()

  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch(`${baseUrlServer}/services`)
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Erreur lors du fetch /services :', error));
  }, []);

  useEffect(() => {
    // Accéder aux paramètres de l'URL
    const { service } = router.query
    const filteredService = services.find(item => item.id === service)
    if (filteredService !== undefined) {
      setServices([filteredService])
    }

  }, [services, router.query])

  if (!services) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>{services[0]?.title}</Head>
      <aside className={`${styles.banner}`}>
        <video autoPlay loop id="video" style={{ maxWidth: '100%', height: 'auto' }}>
          <source src={`../${services[0]?.picture_type}/${services[0]?.picture_url}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`${styles.content} ${common.container} ${common.txtCenter}`}>
          <h1 dangerouslySetInnerHTML={{ __html: services[0]?.title }} />
          <div dangerouslySetInnerHTML={{ __html: services[0]?.resume }} />
        </div>
      </aside>
      <section>
        <div className={`${common.container}`}>
          <h2 dangerouslySetInnerHTML={{ __html: services[0]?.content_title }} />
          <div dangerouslySetInnerHTML={{ __html: services[0]?.content_text }} />
        </div>
      </section>
    </>
  )
}

export default ServicePage
