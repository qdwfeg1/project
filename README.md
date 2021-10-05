# Project

[![dependencies Status](https://david-dm.org/username/project/status.svg)](https://david-dm.org/username/project)
[![Netlify Status](https://api.netlify.com/api/v1/badges/id/deploy-status)](https://app.netlify.com/sites/project/deploys)

## Sample page

[https://project.netlify.app](https://project.netlify.app)

## Getting started

### Get the source code and install dependencies.

This project is using `yarn` as the package manager. You have to set yarn as Gatsby-cli's package manager first.

[https://www.gatsbyjs.com/docs/glossary/yarn/#using-yarn-as-your-gatsby-package-manager](https://www.gatsbyjs.com/docs/glossary/yarn/#using-yarn-as-your-gatsby-package-manager)

```
$ git clone https://github.com/username/project.git
$ yarn install
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new project https://github.com/username/project
```

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `npm run setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./.contentful.json`).

`npm run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
