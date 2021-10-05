module.exports = `
    type ContentfulModelSeo implements Node {
      keywords: String
    }

    type ContentfulPageHomeSectionSliderModelSlideImage implements Node
    @childOf(types: ["ContentfulPageHomeSectionSliderModelSlideImage"]) {
      link: String
    }

    type ContentfulPageHomeSectionCoursesModelCourse implements Node
    @childOf(types: ["ContentfulPageHomeSectionCoursesModelCourse"]) {
      titlePrice: String
      price: String
      titleDate: String
      date: String
    }

    type ContentfulPageHomeSectionTests implements Node
    @childOf(types: ["ContentfulPageHomeSectionTests"]) {
      subtitle: String
    }

    type ContentfulModelNewsItem implements Node
    @childOf(types: ["ContentfulModelNewsItem"]) {
      visibilityDate: Date
    }

    type ContentfulPageHomeSectionReviews implements Node
    @childOf(types: ["ContentfulPageHomeSectionReviews"]) {
      subtitle: String
    }

    type ContentfulPageHomeSectionApplicationForm implements Node
    @childOf(types: ["ContentfulPageHomeSectionApplicationForm"]) {
      subtitle: String
    }
`
