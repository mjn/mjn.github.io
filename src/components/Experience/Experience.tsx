import React from 'react';

import * as Styled from './styles';

interface Props {
  company: string;
  title: string;
  content: React.ReactNode;
  startDate: string;
  endDate: string;
}

const Experience = ({company, title, content, startDate, endDate}: Props) => (
  <Styled.Timeline>
    <Styled.Point />
    <Styled.Details>
      <Styled.Date>
        {startDate} - {endDate}
      </Styled.Date>
      <Styled.Company>{company}</Styled.Company>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Details>
    <Styled.Content>{content}</Styled.Content>
  </Styled.Timeline>
);

export default Experience;
