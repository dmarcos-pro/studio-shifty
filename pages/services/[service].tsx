import Head from "../head"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import data from '../../src/content.json'

import styles from '@scss/article.module.scss'
import common from '@scss/common.module.scss'

type Picture = {
  type: string
  url: string
  name: string
}

type Banner = {
  title: string
  resume: string
  picture: Picture
}
type Content = {
  title: string
  text: string
}

type ServiceProps = {
  id: string
  name: string
  category: string
  banner?: Banner
  content?: Content[]
  resume?: string
}

const ServicePage = () => {
  const router = useRouter()

  const [contentService, setContentService] = useState<ServiceProps>()


  useEffect(() => {
    // Accéder aux paramètres de l'URL
    const { service } = router.query
    const filteredService = data.services.offer.find(item => item.id === service)
    if (filteredService !== null) {
      setContentService(filteredService)
    }
    console.log("🚀 ~ useEffect ~ filteredService:", filteredService)

  }, [router.query])

  if (!contentService) {
    return <div>Loading...</div> // ou tout autre indicateur de chargement
  }

  return (
    <>
      <Head>{contentService.banner?.title}</Head>
      <aside className={`${styles.banner}`}>
        <video autoPlay loop id="video" style={{ maxWidth: '100%', height: 'auto' }}>
          <source src={`../${contentService.banner?.picture.type}/${contentService.banner?.picture.url}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`${styles.content} ${common.container} ${common.txtCenter}`}>
          <h1 dangerouslySetInnerHTML={{ __html: contentService.banner?.title ?? '' }} />
          <div dangerouslySetInnerHTML={{ __html: contentService.banner?.resume ?? '' }} />
        </div>
      </aside>
      <section>
        <div className={`${common.container}`}>
          <h2 dangerouslySetInnerHTML={{ __html: contentService.content?.[0]?.title ?? '' }} />
          <div dangerouslySetInnerHTML={{ __html: contentService.content?.[0]?.text ?? '' }} />
        </div>
      </section>
    </>
  )
}

export default ServicePage
