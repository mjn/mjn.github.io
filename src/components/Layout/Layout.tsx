import React from 'react';
import tw, {styled} from 'twin.macro';

import GlobalStyles from '../../assets/styles/globalStyles';
import '../../assets/styles/global.css';

import {Header, Footer} from '..';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const Container = styled.div`
  ${tw`container mx-auto px-4`}
`;

const Body = styled.div`
  ${tw`py-8`}
`;

const Layout = ({children}: Props) => (
  <>
    <GlobalStyles />
    <Container>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Container>
  </>
);

export default Layout;
