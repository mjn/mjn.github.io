import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import tw, {styled} from 'twin.macro';

import {Layout, Post, Posts, SEO} from "../components"

const Heading = styled.h1``;

const SubHeading = styled.h2`
  ${tw`font-semibold text-lg mb-4`}
`;

const IndexPage = () => {
  const {allMarkdownRemark} = useStaticQuery(query);
  const posts: Post[] = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <SubHeading>Recent Posts</SubHeading>
      <Posts posts={posts} />
    </Layout>
  );
};

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC } 
      limit: 3
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
