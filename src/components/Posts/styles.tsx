import tw, {styled} from 'twin.macro';

export const Posts = styled.div`
  ${tw`w-full flex flex-wrap`}
`;

export const Post = styled.div`
  ${tw`w-full p-4`}
`;

export const Header = styled.div`
  ${tw`flex flex-row`}
`;

export const Title = styled.h2`
  ${tw`flex-grow font-semibold mb-4`}
`;

export const Date = styled.div`
  ${tw`flex-grow-0 text-sm`}
`;

export const Excerpt = styled.p``;