import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import * as Styled from './styles';

interface Post {
  node: {
    id: string;
    excerpt: string;
    frontmatter: {
      title: string;
      date: string;
    }
  }
}

const Posts = () => {
  const {allMarkdownRemark} = useStaticQuery(query);
  const posts: Post[] = allMarkdownRemark.edges;

  return (
    <Styled.Posts>
      {posts.map((post) => (
        <Styled.Post key={post.node.id}>
          <Styled.Header>
            <Styled.Title>{post.node.frontmatter.title}</Styled.Title>
            <Styled.Date>{post.node.frontmatter.date}</Styled.Date>
          </Styled.Header>
          <Styled.Excerpt>{post.node.excerpt}</Styled.Excerpt>
        </Styled.Post>
      ))}
    </Styled.Posts>
  );
};

const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default Posts;
