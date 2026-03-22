const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter("paragraphs", (text) => {
    if (!text) return "";
    return text
      .split(/\n\n+/)
      .filter((p) => p.trim())
      .map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`)
      .join("");
  });
  eleventyConfig.addFilter("date", (dateVal, format) => {
    return DateTime.fromJSDate(new Date(dateVal), { zone: "utc" }).toFormat(
      format,
    );
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
