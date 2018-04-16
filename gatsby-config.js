require('dotenv').config({ silent: true })

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/testimonials`,
        name: 'testimonials',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-stripe',
      options: {
        objects: ['plans'],
        secretKey: process.env.STRIPE_SECRET_KEY,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.WP_DOMAIN,
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientId: process.env.WP_CLIENT_ID,
          wpcom_app_clientSecret: process.env.WP_CLIENT_SECRET,
          wpcom_user: process.env.WP_USERNAME,
          wpcom_pass: process.env.WP_PASSWORD,
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
  ],
}
