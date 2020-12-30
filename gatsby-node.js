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
  await createBlogIndexPages(graphql, actions);
  await createBlogPages(graphql, actions);
};

const createBlogIndexPages = async (graphql, actions) => {
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
          }
        }
      }
    }
  `);

  const posts = result.data.allMarkdownRemark.edges;
  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({length: numPages}).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.join(__dirname, 'src', 'templates', 'BlogIndex', 'index.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
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
