module.exports = function (eleventyConfig) {
  // Passthrough copy for images and fonts
  eleventyConfig.addPassthroughCopy("src/img");

  // Watch CSS changes (although Tailwind watcher handles the build, 11ty needs to know to reload)
  // We'll rely on the browser-sync/dev server to handle CSS reloads usually, 
  // but explicitly watching the output file helps 11ty trigger if needed.
  eleventyConfig.addWatchTarget("./public/css/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
