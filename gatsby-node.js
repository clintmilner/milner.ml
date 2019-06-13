const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({graphql, actions}) => {
    const {createPage, createRedirect} = actions;
    createRedirect({fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true});

    // The “graphql” function allows us to run arbitrary
    // queries against the local Gatsby GraphQL schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
            title
            content
            template
          }
        }
      }
      allWordpressWpPortfolio {
        edges {
          node {
            id
            title
            slug
            featured_media {
              source_url
            }
            excerpt
            content
            acf {
              portfolio_url
              favorite_number
            }
          }
        }
      }
    }
  `);

    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors)
    }

    // Access query results via object destructuring
    const {allWordpressPage, allWordpressWpPortfolio} = result.data;

    // Create Page pages.
    const pageTemplate = path.resolve(`./src/templates/page.js`);
    const portfolioUnderContentTemplate = path.resolve(`./src/templates/portfolioUnderContent.js`);
    // We want to create a detailed page for each page node.
    // The path field contains the relative original WordPress link
    // and we use it for the slug to preserve url structure.
    // The Page ID is prefixed with 'PAGE_'
    allWordpressPage.edges.forEach(({node}) => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${node.slug}/`,
            component: slash((node.template === 'portfolio_under_content.php') ? portfolioUnderContentTemplate : pageTemplate),
            context: node
        })
    });

    const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`);
    // We want to create a detailed page for each portfolio node.
    // The path field stems from the original WordPress link
    // and we use it for the slug to preserve url structure.
    allWordpressWpPortfolio.edges.forEach(({node}) => {
        createPage({
            path: `/portfolio/${node.slug}/`,
            component: slash(portfolioTemplate),
            context: node,
        })
    })
};