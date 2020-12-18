import React from 'react';
import {graphql} from 'gatsby';
import {Layout} from '../../components';

import * as Styled from './styles';

const BlogPost = ({data}) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Styled.Header>
        <Styled.Title>{post.frontmatter.title}</Styled.Title>
        <Styled.Date>{post.frontmatter.date}</Styled.Date>
      </Styled.Header>
      <Styled.Body>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </Styled.Body>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: {eq: $slug} }) {
      html
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`;

export default BlogPost;
