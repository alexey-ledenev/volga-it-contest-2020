import React, { useContext, useEffect, useRef, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { CSSTransition } from 'react-transition-group'
import { throttleTime } from 'rxjs/operators'
import { ScrollCtx } from '../../layouts'
import s from './main-screen.module.sass'

export const MainScreen: React.FC = () => {
  const images = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "main_screen.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      fogRight: file(relativePath: { eq: "01_1_foggy.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fogCenter: file(relativePath: { eq: "01_foggy.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const [scale, setScale] = useState(1)
  const sectionEl = useRef<HTMLElement>(null)
  const scrollLeftSubject = useContext(ScrollCtx)
  useEffect(() => {
    const s = scrollLeftSubject.pipe(throttleTime(200)).subscribe({
      next: v => {
        if (sectionEl === undefined || sectionEl.current === null) return
        const { offsetLeft, scrollWidth } = sectionEl.current
        const scrollOffset = offsetLeft + scrollWidth
        if (v > offsetLeft && v < scrollOffset) {
          setScale(1 + (v / scrollOffset) * 0.5)
        }
      },
    })
    return () => {
      s.unsubscribe()
    }
  }, [scrollLeftSubject])

  return (
    <CSSTransition in={true} timeout={300} appear classNames="slide-right">
      <section className={s.section} ref={sectionEl}>
        <div className="relative mx-auto">
          <Img
            fluid={images.bgImage.childImageSharp.fluid}
            style={{
              transform: `scale(${scale})`,
              transition: 'transform 200ms',
            }}
          />
          <Img
            fluid={images.fogRight.childImageSharp.fluid}
            style={{ position: 'absolute' }}
            className={`inset-0 w-full h-full ${s.fog}`}
          />
          <Img
            fluid={images.fogCenter.childImageSharp.fluid}
            style={{ position: 'absolute' }}
            className={`inset-0 w-full h-full ${s.fog}`}
          />
          <div
            className={`absolute inset-0 w-full h-full flex flex-col justify-center text-white ${s.text}`}
          >
            <h1 className={`text-white ${s.title}`}>
              Обретая гармонию. Обретая себя.
            </h1>
            <h2 className={`text-white ${s.subtitle}`}>
              Погрузитесь в философию Greenfield
            </h2>
          </div>
        </div>
      </section>
    </CSSTransition>
  )
}
