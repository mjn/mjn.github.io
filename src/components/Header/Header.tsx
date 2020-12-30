import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';

import {Avatar, Nav} from './components';

import * as Styled from './styles';

const Header = () => {
  const data = useStaticQuery(query);

  return (
    <Styled.Container>
      <Styled.Avatar>
        <Avatar />
      </Styled.Avatar>
      <Styled.Title>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </Styled.Title>
      <Styled.Nav>
        <Nav />
      </Styled.Nav>
    </Styled.Container>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Header;
