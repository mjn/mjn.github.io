import {createGlobalStyle} from 'styled-components';
import tw, {styled} from 'twin.macro';

export default createGlobalStyle`
  p + p {
    ${tw`mt-3`}
  }
`;
