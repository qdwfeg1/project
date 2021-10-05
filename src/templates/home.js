import PropTypes from "prop-types"
import { Global } from "@emotion/react"
import SwiperCore, { Pagination, Navigation } from "swiper"

import Layout from "components/Layout"
import Seo from "components/Seo"
import Header from "components/Header"
import Footer from "components/Footer"
import * as Sections from "components/home/sections"
import home from "src/theme/template/home"

SwiperCore.use([Pagination, Navigation])

const HomeTemplate = ({ pageContext: { pathLang, seo, header, footer, sections } }) => (
  <Layout>
    <Global styles={(theme) => home(theme)} />
    <Seo {...seo} />
    <Header pathLang={pathLang} {...header} />
    <main className="main">
      {sections.map(({ component, id, ...props }) => {
        const Component = Sections[component]
        if (!Component) return null
        return <Component key={id} pathLang={pathLang} {...props} />
      })}
    </main>
    <Footer pathLang={pathLang} {...footer} />
  </Layout>
)

HomeTemplate.propTypes = {
  pageContext: PropTypes.exact({
    pathLang: PropTypes.string,
    seo: PropTypes.object,
    header: PropTypes.object,
    footer: PropTypes.object,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        component: PropTypes.string,
      }),
    ),
  }).isRequired,
}

export default HomeTemplate
