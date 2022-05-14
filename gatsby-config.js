module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: 'My page',
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    `gatsby-plugin-fontawesome-css`
  ],
}
