import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const Seo = ({ lang, name, title, image, description, keywords }) => (
  <Helmet
    htmlAttributes={{
      dir: "ltr",
      ...(!!lang && { lang }),
    }}
    title={title}
    titleTemplate={`%s${name ? ` - ${name}` : ""}`}
    meta={[
      ...(description.text !== " " && [
        {
          name: `description`,
          content: description.text,
        },
      ]),
      {
        name: `keywords`,
        content: keywords,
      },
      {
        property: `og:title`,
        content: title,
      },
      ...(description.text !== " " && [
        {
          property: `og:description`,
          content: description.text,
        },
      ]),
      ...(!!image?.file?.url && [
        {
          property: "og:image",
          content: image.file.url,
        },
      ]),
      ...(!!image?.file?.details?.image?.width && [
        {
          property: "og:image:width",
          content: image.file.details.image.width,
        },
      ]),
      ...(!!image?.file?.details?.image?.height && [
        {
          property: "og:image:height",
          content: image.file.details.image.height,
        },
      ]),
      {
        property: `og:type`,
        content: `website`,
      },
      ...(!!image?.file?.url && [
        {
          name: "twitter:image:src",
          content: image.file.url,
        },
      ]),
      {
        name: `twitter:card`,
        content: `summary`,
      },
    ]}
  >
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)

Seo.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.exact({
    file: PropTypes.exact({
      details: PropTypes.exact({
        image: PropTypes.exact({
          height: PropTypes.number,
          width: PropTypes.number,
        }),
      }),
      url: PropTypes.string,
    }),
  }),
  lang: PropTypes.string,
  description: PropTypes.exact({
    text: PropTypes.string,
  }).isRequired,
  keywords: PropTypes.string,
}

Seo.defaultProps = {
  image: {
    file: {
      details: {
        image: {
          height: 0,
          width: 0,
        },
      },
      url: "",
    },
  },
  lang: "",
  keywords: "",
}

export default Seo
