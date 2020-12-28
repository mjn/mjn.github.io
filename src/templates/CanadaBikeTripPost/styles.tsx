import tw, {styled} from 'twin.macro';

export const Post = styled.div`
  ${tw`w-full flex-col`}
`;

export const Heading = styled.div`
  ${tw`flex flex-col`}
`;

export const Title = styled.h1`
  ${tw`font-semibold`}
`;

export const Date = styled.div`
  ${tw`text-xs`}
`;

export const Map = styled.div`
  ${tw`mt-2`}
`;

export const Entry = styled.div`
  ${tw`clear-both w-full mt-4`}

  p {
    ${`mb-4`}
  }
`;

export const Links = styled.div`
  ${tw`w-full flex justify-between mt-8`}
`;
