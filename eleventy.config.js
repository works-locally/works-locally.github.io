export default function (eleventyConfig) {
  // Pass through CSS files to the output
  eleventyConfig.addPassthroughCopy('css');

  return {
    dir: {
      input: '.',
      includes: '_includes',
      output: '_site',
    },
    markdownTemplateEngine: 'njk',
  };
}
