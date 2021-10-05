import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { css, Global } from "@emotion/react"
import Layout from "components/Layout"
import Seo from "components/Seo"
import Header from "components/Header"
import Footer from "components/Footer"
import notFoundPage from "theme/template/404"

const NotFoundPage = ({ data }) => {
  const {
    global: { navbar, ...global },
    page: { seo },
  } = data
  return (
    <Layout>
      <Global styles={(theme) => notFoundPage(theme)} />
      <Seo {...seo} title="Страница не найдена" name={global.name} lang="ru" />
      <Header
        pathLang="/"
        logo={global.logo}
        navbar={navbar}
        phone={global.phone}
        button={{
          title: global.btnTitle,
          link: global.btnLink,
        }}
        name={global.name}
      />
      <main>
        <div
          className="container"
          css={css`
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-top: 50px;
            padding-bottom: 50px;
            text-align: center;
          `}
        >
          <h1>404</h1>
        </div>
      </main>
      <Footer pathLang="/" {...global} />
    </Layout>
  )
}

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    global: PropTypes.shape({
      logo: PropTypes.shape({
        gatsbyImageData: PropTypes.object,
      }).isRequired,
      navbar: PropTypes.array,
      btnTitle: PropTypes.string,
      btnLink: PropTypes.string,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
    page: PropTypes.shape({
      seo: PropTypes.object,
    }),
  }).isRequired,
}

export const query = graphql`
  {
    global: contentfulModelGlobal(node_locale: { eq: "ru-RU" }) {
      logo {
        gatsbyImageData(width: 200, height: 200, placeholder: BLURRED, quality: 100)
      }
      navbar {
        id: contentful_id
        title
        link
        navItems {
          id: contentful_id
          title
          link
        }
      }
      btnTitle
      btnLink
      name
      vkLink
      instagramLink
      vitBizLink
      vitBizIcon {
        gatsbyImageData(width: 48, height: 48, placeholder: BLURRED)
        alt: title
      }
      phoneTitle
      phone
      emailTitle
      email
      addressTitle
      address
      addressLink
      openingHours
      companyName
      unp
    }
    page: contentfulPageHome(node_locale: { eq: "ru-RU" }) {
      seo {
        title
        image {
          file {
            details {
              image {
                height
                width
              }
            }
            url
          }
        }
        description {
          text: description
        }
        keywords
      }
    }
  }
`

export default NotFoundPage
