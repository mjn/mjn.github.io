import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';

import * as Styled from './styles';

export interface Post {
  node: {
    id: string;
    excerpt: string;
    frontmatter: {
      title: string;
      date: string;
    }
    fields: {
      slug: string;
    }
  }
}

interface Props {
  posts: Post[];
}

const Posts = ({posts}: Props) => {
  return (
    <Styled.Posts>
      {posts.map((post) => (
        <Styled.Post key={post.node.id}>
          <Styled.Title>
            <Styled.Link><Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link></Styled.Link>
          </Styled.Title>
          <Styled.Date>{post.node.frontmatter.date}</Styled.Date>
          <Styled.Excerpt>{post.node.excerpt}</Styled.Excerpt>
        </Styled.Post>
      ))}
    </Styled.Posts>
  );
};

export default Posts;
