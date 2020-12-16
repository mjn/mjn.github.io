import React from 'react';
import tw, {styled} from 'twin.macro';

import {Header, Footer} from '..';

interface Props {
  children: React.ReactElement[];
}

const Container = styled.div`
  ${tw`mx-5`}
`;

const Body = styled.div`
  ${tw`py-8`}
`;

const Layout = ({children}: Props) => (
  <Container>
    <Header />
    <Body>{children}</Body>
    <Footer />
  </Container>
);

export default Layout;
