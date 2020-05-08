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
          <p>
            Get updates and visually appealing representations of the current
            pandemic across multiple countries.
          </p>
          <Link to="/page-2/">Global Statuses</Link>
          <svg
            width="2560"
            height="172"
            viewBox="0 0 2560 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="white">
              <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z" />
            </path>
          </svg>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
