import React from 'react';

import GlobalStyles from '../../assets/styles/globalStyles';
import '../../assets/styles/global.css';

import {Header, Footer} from '..';

import * as Styled from './styles';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({children}: Props) => (
  <>
    <GlobalStyles />
    <Styled.Container>
      <Header />
      <Styled.Body>{children}</Styled.Body>
      <Footer />
    </Styled.Container>
  </>
);

export default Layout;
