import React from 'react'
import Layout from '../layouts'
import SEO from '../components/seo'
import { MainScreen } from '../components/main-screen/main-screen'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Главная" />
    <MainScreen />
  </Layout>
)

export default IndexPage
