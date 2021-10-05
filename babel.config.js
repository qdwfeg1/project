/* eslint-disable no-template-curly-in-string */
module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          components: "./src/components",
          images: "./src/images",
          lib: "./src/lib",
          styles: "./src/styles",
          theme: "./src/theme",
          utils: "./src/utils",
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ["transform-react-remove-prop-types"],
    },
  },
}
