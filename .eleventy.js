const { minify } = require("terser")
const CleanCSS = require("clean-css")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/css/")
  eleventyConfig.addWatchTarget("./src/css/")
  eleventyConfig.addPassthroughCopy("./src/assets/images/")

  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles
  })

  eleventyConfig.addNunjucksAsyncFilter(
    "jsmin",
    async function (code, callback) {
      try {
        const minified = await minify(code)
        callback(null, minified.code)
      } catch (err) {
        console.error("Terser error: ", err)
        callback(null, code)
      }
    }
  )

  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
