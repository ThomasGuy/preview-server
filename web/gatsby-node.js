// Reporter log to terminal information after a build is done
const path = require(`path`);
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create pages dynamically
exports.createPages = async ({ graphql, actions, createNodeId, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allSanityCategory {
        edges {
          node {
            id
            name
            slug {
              current
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const pages = result.data.allSanityCategory.edges || [];
  pages.forEach(({ node }) => {
    const slug = node.slug.current;
    const nodeId = createNodeId(`${slug}-${node.id}`);
    createPage({
      path: `/category/${slug}`,
      component: path.resolve(`src/templates/Gallery.js`),
      ownerNode: nodeId,
      context: {
        id: nodeId,
        slug,
        title: node.name,
      },
    });
  });
};
