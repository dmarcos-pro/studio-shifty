import Head from "../head"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchService } from '@api/index'

import styles from '@scss/article.module.scss'
import common from '@scss/common.module.scss'

const ServicePage = () => {
  const router = useRouter()
  const { service } = router.query
  const serviceName = typeof service === 'string' ? service : ''
  const { data: serviceData, isLoading, isError } = useQuery(['services', service], () => fetchService(serviceName))

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching service data</div>;
  }

  return (
    <>
      <Head>{serviceData?.title}</Head>
      <aside className={`${styles.banner}`}>
        <video autoPlay loop id="video" style={{ maxWidth: '100%', height: 'auto' }}>
          <source src={`../${serviceData?.picture_type}/${serviceData?.picture_url}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`${styles.content} ${common.container} ${common.txtCenter}`}>
          <h1 dangerouslySetInnerHTML={{ __html: serviceData?.title }} />
          <div dangerouslySetInnerHTML={{ __html: serviceData?.resume }} />
        </div>
      </aside>
      <section>
        <div className={`${common.container}`}>
          <h2 dangerouslySetInnerHTML={{ __html: serviceData?.content_title }} />
          <div dangerouslySetInnerHTML={{ __html: serviceData?.content_text }} />
        </div>
      </section>
    </>
  )
}

export default ServicePage
