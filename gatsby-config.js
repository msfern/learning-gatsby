module.exports = {
  siteMetadata: {
    title: `Learning Gatsby`,
    siteUrl: `https://learninggatsbymain78917.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-plugin-mdx`,
    "gatsby-plugin-dts-css-modules",
  ],
};
