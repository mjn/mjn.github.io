import tw, {styled} from 'twin.macro';

export const Nav = styled.div`
  &:last-child {
    ${tw`mr-0`}
  }
`;

export const Link = styled.span`
  ${tw`text-blue-500 shadow-link mr-4`}
`;
