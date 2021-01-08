import React from 'react';
import {Link, useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const data = useStaticQuery(query);

  return (
    <Link to="/">
      <Img className="rounded-full border border-gray-200 shadow-inner" fixed={data.placeholderImage.childImageSharp.fixed} />
    </Link>
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