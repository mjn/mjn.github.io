import React from 'react';
import {graphql, Link} from 'gatsby';

import {Layout, Posts, SEO} from '../../components';

import * as Styled from './styles';

interface Post {
  node: {
    id: string;
    excerpt: string;
    fields: {
      slug: string;
    },
    frontmatter: {
      title: string;
      date: string;
    }
  }
}

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Post[];
    },
  },
  pageContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
  }
}

const BlogIndex = ({data, pageContext}: Props) => {
  const prev = pageContext.currentPage > 1 ? pageContext.currentPage - 1 : null;
  const next = pageContext.currentPage < pageContext.numPages ? pageContext.currentPage + 1 : null;

  return (
    <Layout>
      <Posts posts={data.allMarkdownRemark.edges} />
      <Styled.Links>
        <Styled.Link>
          {prev && (
            <Link to={`/blog/${prev === 1 ? '' : prev}`} rel="previous">← Prev</Link>
          )}
        </Styled.Link>
        <Styled.Link>
          {next && (
            <Link to={`/blog/${next}`} rel="next">Next →</Link>
          )}
        </Styled.Link>
      </Styled.Links>
    </Layout>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default BlogIndex;