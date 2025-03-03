module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("css");

    return {
        markdownTemplateEngine: "njk", // Ensures Markdown is processed as HTML
        dir: {
            input: "content",
            includes: "../_layouts",
            output: "_site"
        }
    };
};

