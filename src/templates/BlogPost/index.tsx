import React from 'react';
import {graphql, Link} from 'gatsby';
import {Layout, FormattedHtml, Map, SEO} from '../../components';

import * as Styled from './styles';

interface Post {
  html: React.ReactNode;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    description: string;
    mapSrc?: string;
  };
}

interface Props {
  data: {
    markdownRemark: Post;
  };
  pageContext: {
    slug: string;
    next: Post;
    prev: Post;
  };
}

const BlogPost = ({data, pageContext}: Props) => {
  const post = data.markdownRemark;
  const {next, prev} = pageContext;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />
      <Styled.Title>{post.frontmatter.title}</Styled.Title>
      <Styled.Date>{post.frontmatter.date}</Styled.Date>
      <Styled.Entry>
        {post.frontmatter.mapSrc && (
          <Styled.Map>
            <Map src={post.frontmatter.mapSrc} />
          </Styled.Map>
        )}
        <FormattedHtml content={post.html} />
      </Styled.Entry>
      <Styled.Links>
        <Styled.Link>
          {prev && (
            <Link to={prev.fields.slug} rel="previous"><Styled.LinkArrow>←</Styled.LinkArrow> <Styled.LinkText>{prev.frontmatter.title}</Styled.LinkText></Link>
          )}
        </Styled.Link>
        <Styled.Link>
          {next && (
            <Link to={next.fields.slug} rel="next"><Styled.LinkText>{next.frontmatter.title}</Styled.LinkText> <Styled.LinkArrow>→</Styled.LinkArrow></Link>
          )}
        </Styled.Link>
      </Styled.Links>
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: {eq: $slug} }) {
      html
      frontmatter {
        title
        description
        mapSrc
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`;

export default BlogPost;
