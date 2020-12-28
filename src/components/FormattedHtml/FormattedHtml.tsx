import React, {ReactNode} from 'react';

interface Props {
  content: any;
}

const FormattedHtml = ({content}: Props) => (
  <div
    className="format-html"
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default FormattedHtml;