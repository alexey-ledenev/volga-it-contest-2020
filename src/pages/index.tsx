import React from 'react'
import Layout from '../layouts'
import SEO from '../components/seo'
import { MainScreen } from '../components/main-screen/main-screen'
import { DescriptionScreen } from '../components/description-screen/description-screen'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Главная" />
    <MainScreen />
    <DescriptionScreen />
  </Layout>
)

export default IndexPage
