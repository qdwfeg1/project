const path = require("path")
const { locales } = require("./config/site")
const types = require("./src/types/types")
const globalQuery = require("./src/queries/global")
const homeQuery = require("./src/queries/home")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(types)
}

exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {
  const home = path.resolve("./src/templates/home.js")

  const { data, errors } = await graphql(`
  {
    ${globalQuery()}
    ${globalQuery("EN", "en-US")}
    ${homeQuery()}
    ${homeQuery("EN", "en-US")}
  }
`)

  if (errors) {
    reporter.panicOnBuild(`There was an error loading your Contentful posts`, errors)
    return
  }

  locales.forEach(({ path: pathLang, lang }) => {
    const { navbar, ...global } = data[`global${lang}`]
    const globalContext = {
      pathLang,
      seo: {
        lang: lang.toLowerCase(),
        name: global.name,
      },
      header: {
        logo: global.logo,
        navbar,
        button: {
          title: global.btnTitle,
          link: global.btnLink,
        },
        name: global.name,
        phone: global.phone,
      },
      footer: global,
    }

    createPage({
      path: pathLang,
      component: home,
      context: {
        ...globalContext,
        seo: {
          ...data[`home${lang}`].seo,
          ...globalContext.seo,
        },
        sections: data[`home${lang}`].sections.sort((a, b) => a.position - b.position),
      },
    })
  })

  /*
    if (posts.length > 0) {
      posts.forEach((post, index) => {
        const previousPostSlug = index === 0 ? null : posts[index - 1].slug
        const nextPostSlug =
          index === posts.length - 1 ? null : posts[index + 1].slug

        createPage({
          path: `/blog/${post.slug}/`,
          component: blogPost,
          context: {
            slug: post.slug,
            previousPostSlug,
            nextPostSlug,
          },
        })
      })
    }
  */
}
