import tw, {styled} from 'twin.macro';

export const Post = styled.div`
  ${tw`w-full flex-col`}
`;

export const Heading = styled.div`
  ${tw`flex flex-col`}
`;

export const Title = styled.h1`
  ${tw`font-semibold text-xl`}
`;

export const Date = styled.div`
  ${tw`text-xs`}
`;

export const Map = styled.div`
  ${tw`mt-2 mb-4`}
`;

export const Entry = styled.div`
  ${tw`clear-both w-full mt-4`}

  h2 {
    ${tw`font-semibold text-lg mt-4 mb-2`}
  }

  p {
    ${tw`mb-4`}
  }

  code {
    ${tw`bg-gray-200 rounded px-1`}
  }
`;

export const Links = styled.div`
  ${tw`w-full flex justify-between mt-8`}
`;

export const Link = styled.span`
  ${tw`text-blue-500`}
`;

export const LinkText = styled.span`
  ${tw`hidden sm:inline shadow-link`}
`;

export const LinkArrow = styled.span``;
