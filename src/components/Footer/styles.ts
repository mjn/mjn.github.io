import tw, {styled} from 'twin.macro';

export const Container = styled.div`
  ${tw`border-t border-gray-200 py-4`}
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`}
`;

export const Link = styled.a`
  ${tw`text-blue-300 hover:text-blue-500 mx-4 text-2xl`}
`;

