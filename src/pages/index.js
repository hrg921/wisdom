import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
    <SEO title="Home" keywords={[`geonho han`, `wisdom`, `all`]} />
    {data.allMarkdownRemark.edges.map(edge => {
      return (
        <div>
          <h1><span>@{edge.node.fields.category}</span> {edge.node.frontmatter.title}</h1>
          <p>{edge.node.frontmatter.description}</p>
          <time>{edge.node.frontmatter.date}</time>
          <div>
            {edge.node.frontmatter.tags.map(tag => {
              return (
                <span>#{tag} </span>
              )
            })}
          </div>
        </div>
      )
    })}
  </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title,
            description,
            date(formatString: "DD MMMM, YYYY"),
            tags
          }
          fields {
            category
          }
        }
      }
    }
  }
`
