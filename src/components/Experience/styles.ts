import tw, {styled} from 'twin.macro';

export const Timeline = styled.div`
  ${tw`flex flex-col sm:flex-row w-full p-4 relative border-l border-indigo-200`}

  &:last-child {
    ${tw`pb-0`}
  }
`;

export const Details = styled.div`
  ${tw`w-full sm:w-1/3`}
`;

export const Content = styled.div`
  ${tw`w-full sm:w-2/3 mt-4 sm:mt-0`}
`;

export const Company = styled.div`
  ${tw`font-semibold mt-3`}
`;

export const Title = styled.div`
  ${tw`text-xs`}
`;

export const Date = styled.div`
  ${tw`text-xs border border-blue-400 rounded-full px-2`}
  width: fit-content;
`;

export const Point = styled.span`
  ${tw`w-3 h-3 border border-blue-200 bg-blue-100 rounded-full absolute`};
  left: -6px;
  top: 20px;
`;
