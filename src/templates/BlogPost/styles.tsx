import tw, {styled} from 'twin.macro';

export const Post = styled.div`
  ${tw`w-full`}
`;

export const Header = styled.div`
  ${tw`flex flex-row py-4`}
`;

export const Title = styled.h1`
  ${tw`flex-grow font-semibold`}
`;

export const Date = styled.div`
  ${tw`flex-grow-0 text-sm`}
`;

export const Body = styled.div`
  ${tw`w-full`}
`;
