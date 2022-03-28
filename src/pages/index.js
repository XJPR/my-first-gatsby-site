import * as React from 'react'
import Layout from './layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Kingdom Hearts 2 poster"
        src="../images/KH2-cover.webp"
      />
    </Layout>
  )
}

export default IndexPage