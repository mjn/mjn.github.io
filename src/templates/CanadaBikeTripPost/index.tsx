import React from 'react';
import {graphql, Link} from 'gatsby';

import {Layout, FormattedHtml, Map} from '../../components';

import * as Styled from './styles';

interface Post {
  html: React.ReactNode;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    mapSrc?: string | null;
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

const CanadaBikeTripPost = ({data, pageContext}: Props) => {
  const post = data.markdownRemark;
  const {next, prev} = pageContext;
  return (
    <Layout>
      <Styled.Heading>
        <Styled.Title>{post.frontmatter.title}</Styled.Title>
        <Styled.Date>{post.frontmatter.date}</Styled.Date>
        <Styled.Map>
          <Map src={post.frontmatter.mapSrc || ''} />
        </Styled.Map>
      </Styled.Heading>
      <Styled.Entry>
        <FormattedHtml content={post.html} />
      </Styled.Entry>
      <Styled.Links>
        <span>
          {prev && (
            <Link to={prev.fields.slug} rel="previous">← {prev.frontmatter.title}</Link>
          )}
        </span>
        <span>
          {next && (
            <Link to={next.fields.slug} rel="next">{next.frontmatter.title} →</Link>
          )}
        </span>
      </Styled.Links>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: {eq: $slug} }) {
      html
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
        mapSrc
      }
    }
  }
`;

export default CanadaBikeTripPost;
