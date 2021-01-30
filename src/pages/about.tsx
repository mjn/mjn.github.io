import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {DateTime} from 'luxon';
import tw, {styled} from 'twin.macro';

import {Experience, FormattedHtml, Layout, SEO} from '../components';

interface Experience {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      company: string;
      title: string;
      startDate: string;
      endDate: string;
    };
  };
};

const Heading = styled.h1`
  ${tw`font-semibold text-xl mb-4`}
`;

const SubHeading = styled.h2`
  ${tw`font-semibold text-lg mb-4 mt-8`}
`;

const AboutPage = () => {
  const {allMarkdownRemark} = useStaticQuery(query);
  const experiences: Experience[] = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="About" />
      <>
        <Heading>About Me</Heading>
        <p>
        A growth engineer that is constantly asking "why?" and then doing whatever is necessary to answer that question. Especially interested in collecting data and building tools to help dig into the data in order to better understand the customer acquisition funnel. 
        </p>
        <SubHeading>Experience</SubHeading> 
        {experiences.map((item) => {
          const {
            id,
            html,
            frontmatter: { company, title, startDate, endDate }
          } = item.node;
          const start = DateTime.fromISO(startDate).toFormat('MMM yyyy');
          const end = endDate ? DateTime.fromISO(endDate).toFormat('MMM yyyy') : 'Present';

          return (
            <Experience
              key={id}
              company={company}
              title={title}
              content={<FormattedHtml content={html} />}
              startDate={start}
              endDate={end}
            />
          );
        })}
      </>
    </Layout>
  );
};

const query = graphql`
  query {
    markdownRemark(frontmatter: { category: { eq: "experience" } }) {
      frontmatter {
        company
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "experience" } } }
      sort: { fields: frontmatter___startDate, order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            company
            title
            startDate
            endDate
          }
        }
      }
    }
  }
`;

export default AboutPage;
