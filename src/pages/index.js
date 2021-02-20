import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Home } from "../components/Screens/Home"

import Expertiese from "../components/Screens/Expertiese"
import Clients from "../components/Screens/Clients"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
    <Expertiese />
    <Clients />
  </>
)

export default IndexPage
