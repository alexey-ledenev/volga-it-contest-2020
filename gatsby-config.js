module.exports = {
  siteMetadata: {
    title: 'Volga IT - 2020',
    description: 'Digital contest',
    author: 'Alexey Ledenev',
  },
  pathPrefix: '/volga-it-contest-2020',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-layout',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Volga IT - 2020',
        short_name: 'Volga IT',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
