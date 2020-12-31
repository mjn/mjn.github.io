import tw, {styled} from 'twin.macro';

export const Container = styled.div`
  ${tw`container flex flex-col mx-auto px-4 min-h-screen`}
`;

export const Header = styled.div`
  ${tw`flex-grow-0`}
`;

export const Body = styled.div`
  ${tw`py-8 flex-grow`}
`;

export const Footer = styled.div`
  ${tw`flex-grow-0`}
`;

