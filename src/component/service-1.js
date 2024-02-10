import React, { useEffect, useState, useRef } from 'react'

import Btn from './btn'

// CSS
import hp from '@scss/homepage.module.scss'
import common from '@scss/common.module.scss'
import animation from '@scss/animation.module.scss'

const Service = (props) => {
  const itemRef = useRef(null)
  const [isVisible, setIsVisible] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setIsVisible(true)
          } else {
            // Revenir en arriere lorsque ref plus visible (=suppression de la class)
            setIsVisible(true)
          }
        })
      },
      { rootMargin: `-${window.innerHeight / 3}px` }
    )

    // On observe l'élément cible
    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    // Nettoyage de l'observateur lorsque le composant est démonté
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [])
  const animated = isVisible ? animation.animated : ''
  const odd = props.index % 2 ? animation.fadeLeft : animation.fadeRight
  return (
    <div key={props.id} className={`${hp.service}`} ref={itemRef}>
      <aside className={`${animated} ${odd} `}>
        <span className={`${common.tag}`}>{props.category}</span>
        <h3>{props.title}</h3>
        <div className={common.contentText} dangerouslySetInnerHTML={{ __html: props.text }} />
        <div className={common.boxCta}>
          <Btn version="secondary" content="En savoir plus" url={`/${props.root}/${props.id}`} />
        </div>
      </aside>
      <figure className={`${animated} ${animation.fadeUp} `}>
        <img src={require(`../assets/img/${props.image}`)} alt={props.name} />
      </figure>
    </div>
  )
}

export default Service
