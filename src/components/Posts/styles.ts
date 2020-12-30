import tw, {styled} from 'twin.macro';

export const Posts = styled.div`
  ${tw`w-full flex flex-wrap`}
`;

export const Post = styled.div`
  ${tw`w-full pb-4`}
`;

export const Header = styled.div`
  ${tw`flex flex-row`}
`;

export const Title = styled.h3`
  ${tw`flex flex-row font-semibold`}
`;

export const Link = styled.span`
  ${tw`font-semibold text-blue-500 shadow-link`}
`;

export const Date = styled.div`
  ${tw`flex flex-row text-xs`}
`;

export const Excerpt = styled.p`
  ${tw`mt-4 text-sm`}
`;