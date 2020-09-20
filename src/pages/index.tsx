import React from 'react'
import SEO from '../components/seo'
import { MainScreen } from '../components/main-screen/main-screen'
import { DescriptionScreen } from '../components/description-screen/description-screen'

const IndexPage: React.FC = () => (
  <>
    <SEO title="Главная" />
    <MainScreen />
    <DescriptionScreen />
  </>
)

export default IndexPage
