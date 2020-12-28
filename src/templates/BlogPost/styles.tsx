import tw, {styled} from 'twin.macro';

export const Post = styled.div`
  ${tw`w-full`}
`;

export const Title = styled.h1`
  ${tw`flex flex-row font-semibold`}
`;

export const Date = styled.div`
  ${tw`flex flex-row text-xs`}
`;

export const Entry = styled.div`
  ${tw`w-full mt-4`}

  p {
    ${`mb-4`}
  }
`;

export const Links = styled.div`
`;