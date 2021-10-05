module.exports = (lang = "RU", locale = "ru-RU") => `
  home${lang}: contentfulPageHome(node_locale: {eq: "${locale}"}) {
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
    sections {
      ... on ContentfulPageHomeSectionSlider {
        id: contentful_id
        position
        component
        items {
          ... on ContentfulPageHomeSectionSliderModelSlideImage {
            id: contentful_id
            position
            component
            imageMobile {
              gatsbyImageData(
                width: 480
                height: 480
                aspectRatio: 1
                placeholder: BLURRED
              )
              alt: title
            }
            imageDesktop {
              gatsbyImageData(
                width: 1120
                height: 630
                aspectRatio: 1.78
                placeholder: BLURRED
              )
              alt: title
            }
            link
          }
          ... on ContentfulPageHomeSectionSliderModelSlideYouTube {
            id: contentful_id
            position
            component
            youTubeLink
          }
        }
      }
      ... on ContentfulPageHomeSectionCourses {
        id: contentful_id
        position
        component
        title
        items {
          id: contentful_id
          titleItem {
            text: titleItem
          }
          link
          borderColor
          subtitle {
            text: subtitle
          }
          text {
            text
          }
          images {
            id: contentful_id
            gatsbyImageData(width: 180, height: 108, placeholder: BLURRED)
            alt: title
          }
          titlePrice
          price
          titleDate
          date
        }
      }
      ... on ContentfulPageHomeSectionTests {
        id: contentful_id
        position
        component
        title
        subtitle
        btnTitle
        items {
          title
          link
          color
          image {
            file {
              src: url
            }
            alt: title
          }
        }
      }
      ... on ContentfulPageHomeSectionTeachers {
        id: contentful_id
        position
        component
        title
        linkTitle
        items {
          image {
            gatsbyImageData(width: 300, height: 330, placeholder: BLURRED, quality: 100)
            alt: title
          }
          name
          position
          quote
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      ... on ContentfulPageHomeSectionNews {
        id: contentful_id
        position
        component
        title
        items {
          visibility
          visibilityDate
          title
          excerpt {
            text: excerpt
          }
          content {
            text: content
          }
          images {
            id: contentful_id
            gatsbyImageData(width: 2000, height: 2000, placeholder: BLURRED)
            alt: title
          }
          slug
        }
      }
      ... on ContentfulPageHomeSectionReviews {
        id: contentful_id
        position
        component
        title
        subtitle
        items {
          image {
            gatsbyImageData(width: 120, height: 120, placeholder: BLURRED, quality: 100)
            alt: title
          }
          name
          position
          text {
            text
          }
        }
      }
      ... on ContentfulPageHomeSectionInstagram {
        id: contentful_id
        position
        component
        title
      }
      ... on ContentfulPageHomeSectionApplicationForm {
        id: contentful_id
        position
        component
        title
        subtitle
        btnTitle
        image {
          file {
            src: url
          }
          alt: title
        }
        namePlaceholder
        agePlaceholder
        ageOptions {
          text: ageOptions
        }
        phonePlaceholder
        phoneMask
      }
    }
  }
`
