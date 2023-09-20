/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `fire-pay-app`,
    siteUrl: `https://firepay.netlify.app/`,
    description: `Criamos um checkout
    para colocar mais dinheiro no seu bolso - 16% a mais, em média.
    Com a gente você aumenta sua margem e escala mais rápido o seu negócio.`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Firepay",
        short_name: "Firepay",
        start_url: "/",
        background_color: "#FAFAFA",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png",
        //crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
