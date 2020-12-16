import React from 'react';
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const data = useStaticQuery(query);

  return (
    <Img className="rounded-full border border-gray-200 shadow-inner" fixed={data.placeholderImage.childImageSharp.fixed} />
  );
};

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Avatar;