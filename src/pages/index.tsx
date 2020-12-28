import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"

import {Layout, Post, Posts, SEO} from "../components"

const IndexPage = () => {
  const {allMarkdownRemark} = useStaticQuery(query);
  const posts: Post[] = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <Posts posts={posts} />
    </Layout>
  );
};

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC } 
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
