const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({node, getNode});
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({graphql, actions}) => {
  await createBlogPages(graphql, actions);
  await createCanadaBikeTripPages(graphql, actions);
};


const createBlogPages = async (graphql, actions) => {
  const {createPage} = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const prev = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: path.join(__dirname, 'src', 'templates', 'BlogPost', 'index.tsx'),
      context: {
        slug: post.node.fields.slug,
        next,
        prev,
      },
    });
  });
}

const createCanadaBikeTripPages = async (graphql, actions) => {
  const {createPage} = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "canada-bike-trip" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const prev = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: path.join(__dirname, 'src', 'templates', 'CanadaBikeTripPost', 'index.tsx'),
      context: {
        slug: post.node.fields.slug,
        next,
        prev,
      },
    });
  });

}