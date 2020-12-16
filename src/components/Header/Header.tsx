import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import tw, {styled} from 'twin.macro';

import {Avatar, Nav} from './components';

const Container = styled.div`
  ${tw`flex flex-row items-center py-2`}
`;

const Title = styled.div`
  ${tw`flex-grow px-4 text-xl font-bold text-gray-600`}
`;

const Header = () => {
  const data = useStaticQuery(query);

  return (
    <Container>
      <div className="flex-grow-0">
        <Avatar />
      </div>
      <Title>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </Title>
      <div className="flex-grow-0">
        <Nav />
      </div>
    </Container>
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
