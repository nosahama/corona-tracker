import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts"
import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>COVID-19 Tracker</h1>
//     <p>Get updates and visually appealing representations of the current pandemic across multiple countries.</p>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>COVID-19 Tracker</h1>
          <p>Get updates and visually appealing representations of the current pandemic across multiple countries.</p>
          <Link to="/page-2/">Global Statuses</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
