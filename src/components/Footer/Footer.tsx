import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Container>
    <Styled.Links>
      <Styled.Link href="https://github.com/mjn" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </Styled.Link>
      <Styled.Link href="https://twitter.com/mjn" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </Styled.Link>
      <Styled.Link href="https://www.linkedin.com/in/marknorthcott" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </Styled.Link>
    </Styled.Links>
  </Styled.Container>
);

export default Footer;
