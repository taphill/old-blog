const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/css/")
  eleventyConfig.addWatchTarget("./src/css/")

  eleventyConfig.addPlugin(syntaxHighlight)

  // eleventyConfig.addCollection("posts", (collection) => {
  //   return collection
  //     .getFilteredByGlob("./src/work/*.md")
  //     .sort((a, b) =>
  //       Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
  //     )
  // })

  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
