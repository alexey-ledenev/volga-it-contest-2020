import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface IMetaObject {
  name: string
  content: string
}
interface ISEOProps {
  description?: string
  meta?: IMetaObject[]
  title: string
}

interface ISiteData {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

const SEO: React.FC<ISEOProps> = ({
  description = '',
  meta = [],
  title = 'VOLGA-IT 2020',
}) => {
  const { site } = useStaticQuery<ISiteData>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: 'ru',
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
