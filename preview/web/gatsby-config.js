const dotenv = require('dotenv');
const clientConfig = require('./client-config');

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const token = process.env.SANITY_READ_TOKEN;
const isProd = process.env.NODE_ENV === 'production';
const previewEnabled =
  (process.env.GATSBY_IS_PREVIEW || 'false').toLowerCase() === 'true';

module.exports = {
  siteMetadata: {
    title: 'Template Site',
    siteURL: 'https://twgyuy.co.uk',
    description: 'Gallery website',
    author: 'Thomas Guy <twguy.weddev@gmail.com>',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        useCdn: isProd,
        overlayDrafts: !isProd || previewEnabled,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sitemap',
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/assets/typography`,
      },
    },
  ],
};
