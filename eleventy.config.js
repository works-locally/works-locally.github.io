export default function (eleventyConfig) {
  // Pass through CSS files to the output
  eleventyConfig.addPassthroughCopy('css');
  // Pass through images to the output
  eleventyConfig.addPassthroughCopy('images');
  // Pass through favicon
  eleventyConfig.addPassthroughCopy('favicon.svg');
  // Pass through OG image
  eleventyConfig.addPassthroughCopy('og.png');
  // Pass through OG image
  eleventyConfig.addPassthroughCopy('og_lowres.png');

  return {
    dir: {
      input: '.',
      includes: '_includes',
      output: '_site',
    },
    markdownTemplateEngine: 'njk',
  };
}
