const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/css/")
  eleventyConfig.addWatchTarget("./src/css/")

  eleventyConfig.addPlugin(syntaxHighlight)

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  }
}
