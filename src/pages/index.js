import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { Home } from "../components/Screens/Home"

import Expertiese from "../components/Screens/Expertiese"
import Clients from "../components/Screens/Clients"
import About from "../components/Screens/About"
import Contact from "../components/Screens/Contact"
import Footer from "../components/Screens/Footer"

import { FaArrowCircleUp } from "react-icons/fa"
const IndexPage = () => (
  <>
    <a href="/#" className="float">
      <FaArrowCircleUp size="2em" className="my-float" />
    </a>
    <Layout>
      <SEO title="Home" />
      <main>
        <Home />
      </main>
    </Layout>
    <section>
      <Expertiese id="experties" />
      <Clients id="clients" />
      <About id="about" />
      <Contact id="contact" />
    </section>

    <footer>
      <Footer />
    </footer>
  </>
)

export default IndexPage
