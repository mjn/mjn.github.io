import React from 'react';
import {Link} from 'gatsby';

import * as Styled from './styles';

const Nav = () => (
  <Styled.Nav>
    <Styled.Link>
      <Link to="/about">About</Link>
    </Styled.Link>
    <Styled.Link>
      <Link to="/blog">Blog</Link>
    </Styled.Link>
  </Styled.Nav>
);

export default Nav;
