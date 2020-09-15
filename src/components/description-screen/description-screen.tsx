import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import s from './description-screen.module.sass'

export const DescriptionScreen: React.FC = () => {
  const images = useStaticQuery(graphql`
    query {
      teaLeft: file(relativePath: { eq: "tea1.jpg" }) {
        childImageSharp {
          fixed(width: 515, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      teaRight: file(relativePath: { eq: "tea2.jpg" }) {
        childImageSharp {
          fixed(width: 590, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      leaves: file(relativePath: { eq: "leaves.png" }) {
        childImageSharp {
          fixed(width: 1240, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className={s.section}>
      <div className="relative flex-shrink-0">
        <Img
          fixed={images.teaLeft.childImageSharp.fixed}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="Tea"
        />
      </div>
      <article>
        <h2 className="h2">
          Ускользающее мгновение, воплощенное в чашечке чая...
        </h2>
        <p className="txt">
          Среди бесконечного разнообразия чая есть сорта, имеющие особое
          значение. И только они таят особый магнетизм, который заставляет
          следовать совету Оскара Уайльда, считавшего, что существует лишь
          единственный способ противостоять искушению – поддаться ему.
        </p>
        <h4 className="h4">002</h4>
        <Img
          fixed={images.teaRight.childImageSharp.fixed}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="Tea"
          loading="lazy"
        />
      </article>
      <div className={s.leafs}>
        <Img
          fixed={images.leaves.childImageSharp.fixed}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="Leafs"
        />
      </div>
    </section>
  )
}
