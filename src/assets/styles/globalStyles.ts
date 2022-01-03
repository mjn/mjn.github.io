import {createGlobalStyle} from 'styled-components';
import tw from 'twin.macro';

export default createGlobalStyle`
  body {
    ${tw`font-mono`}
  }
  
  p + p {
    ${tw`mt-3`}
  }
`;
