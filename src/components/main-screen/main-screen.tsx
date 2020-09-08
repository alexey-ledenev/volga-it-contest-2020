import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
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
          fixed(width: 1920, quality: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      fogCenter: file(relativePath: { eq: "01_foggy.png" }) {
        childImageSharp {
          fixed(width: 1920, quality: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="screen max-w-screen-xxl mx-auto">
      <div className="absolute inset-0 w-full h-full">
        <Img fluid={images.bgImage.childImageSharp.fluid} />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <Img
          fixed={images.fogRight.childImageSharp.fixed}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <Img
          fixed={images.fogCenter.childImageSharp.fixed}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>
      <div
        className={`relative h-full flex flex-col justify-center text-white ${s.text}`}
      >
        <h1 className={`text-white ${s.title}`}>
          Обретая гармонию. Обретая себя.
        </h1>
        <h2 className={`text-white ${s.subtitle}`}>
          Погрузитесь в философию Greenfield
        </h2>
      </div>
    </section>
  )
}
