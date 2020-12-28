import React from 'react';

interface Props {
  src: string;
}

const Map = ({src}: Props) => (
  <iframe 
    src={src} 
    width="100%" 
    frameBorder="0" 
    style={{border:0}} 
    allowFullScreen={false} 
    aria-hidden="false" 
    tabIndex={0} 
  />
);

export default Map;