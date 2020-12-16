import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import tw, {styled} from 'twin.macro';

const Container = styled.div`
  ${tw`border-t border-gray-200 py-4`}
`;

const Links = styled.div`
  ${tw`flex items-center justify-center w-full`}
`;

const Link = styled.a`
  ${tw`text-blue-300 hover:text-blue-500 mx-4 text-2xl`}
`;

const Footer = () => (
  <Container>
    <Links>
      <Link href="https://github.com/mjn" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link href="https://twitter.com/mjn" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link href="https://www.linkedin.com/in/marknorthcott" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </Links>
  </Container>
);

export default Footer;
