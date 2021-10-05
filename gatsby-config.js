const { name } = require("./config/site")

const {
  NODE_ENV: nodeEnv = "",
  // GOOGLE_ANALYTICS_TRACKING_ID: trackingId = "",
  CONTENTFUL_SPACE_ID: spaceId = "q9nvgf0a9bh6",
  CONTENTFUL_HOST: host = "",
  CONTENTFUL_PREVIEW_ACCESS_TOKEN: previewAccessToken = "",
  CONTENTFUL_ACCESS_TOKEN: accessToken = "riZCQ_9KWoZQol65LfHSuN2nrUqgQ7LZvNEL5zWpYYA",
  CONTENTFUL_DELIVERY_TOKEN: deliveryToken = "",
} = process.env

// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config({
  path: `.env.${nodeEnv}`,
})

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.

const token = (host && previewAccessToken) || accessToken || deliveryToken

if (!spaceId || !token) {
  throw new Error("Contentful spaceId and the access token need to be provided.")
}

module.exports = {
  siteMetadata: {
    title: name,
  },
  plugins: [
    /*
        {
          resolve: "gatsby-plugin-google-analytics",
          options: {
            trackingId,
          },
        },
    */
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name,
        short_name: name,
        lang: `ru`,
        start_url: `/`,
        display: `standalone`,
        background_color: `#fff`,
        theme_color: `#017ce3`,
        icon: "src/images/logo.png",
        localize: [
          {
            name,
            short_name: name,
            lang: `en`,
            start_url: `/en/`,
          },
        ],
        legacy: false,
        cache_busting_mode: "none",
        // theme_color_in_head: false,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken: token,
        ...(!!host && { host }),
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-eslint",
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/images*"],
        },
      },
    },
  ],
}
