const catchy = require("catchy-image");

module.exports = async ({ markdownNode }, pluginOptions) => {
  // Sending gatsby-config.js settings and markdowns header metadata to image generation Library.
  const result = await catchy.generate({
    ...pluginOptions,
    output: {
      ...pluginOptions.output,
      directory: `./public${markdownNode.fields?.slug}`,
      fileName: pluginOptions.output.fileName
    },
    meta: {
      ...pluginOptions.meta,
      title: markdownNode.frontmatter.title
    }
  });

  console.info(`gatsby-remark-sns-image: Successful generated: ${result}`);
};
