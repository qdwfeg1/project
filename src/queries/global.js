module.exports = (lang = "RU", locale = "ru-RU") => `
  global${lang}: contentfulModelGlobal(node_locale: {eq: "${locale}"}) {
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
`
