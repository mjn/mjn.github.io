import React from "react"
import {useStaticQuery, graphql} from "gatsby"

import {Layout, Post, Posts, SEO} from "../components"

const CanadaBikeTripPage = () => {
  const {allMarkdownRemark} = useStaticQuery(query);
  const posts: Post[] = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Cross Canada Bike Trip" />
      <Posts posts={posts} />
    </Layout>
  );
};

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "canada-bike-trip" } } }
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

export default CanadaBikeTripPage;
