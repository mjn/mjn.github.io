import React from 'react';
import {Link, useStaticQuery, graphql} from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image";

const Avatar = () => {
  const data = useStaticQuery(query);

  return (
    <Link to="/">
      <GatsbyImage
        className="rounded-full border border-gray-200 shadow-inner z-[100]"
        image={data.placeholderImage.childImageSharp.gatsbyImageData}
        alt="Mark Northcott" />
    </Link>
  );
};

const query = graphql`{
  placeholderImage: file(relativePath: {eq: "profile.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
    }
  }
}
`;

export default Avatar;