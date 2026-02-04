const { DateTime } = require("luxon");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Image = require("@11ty/eleventy-img");
const path = require("path");
const fs = require("fs");

module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Date filter
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
    if (!dateObj) return "";
    if (typeof dateObj === 'string') {
      return DateTime.fromISO(dateObj).toFormat(format);
    }
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // Image Transform
  eleventyConfig.addTransform("optimizeImages", async function(content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
      const dom = new JSDOM(content);
      const doc = dom.window.document;
      const body = doc.querySelector("body");
      
      if (!body) return content;
      
      const inputPath = body.getAttribute("data-input-path");
      // Remove the attribute to clean up
      body.removeAttribute("data-input-path");
      
      const images = [...doc.querySelectorAll("main img")];
      
      if (images.length > 0 && inputPath) {
        const inputDir = path.dirname(inputPath);
        const outputDir = path.dirname(outputPath);
        
        for (const img of images) {
          const src = img.getAttribute("src");
          
          // Skip external images or absolute paths
          if (src.startsWith("http") || src.startsWith("/")) {
            continue;
          }
          
          // Resolve image path
          const imagePath = path.join(inputDir, src);
          
          if (fs.existsSync(imagePath)) {
            try {
              const metadata = await Image(imagePath, {
                widths: [400, 800],
                formats: ["webp", "jpeg"],
                outputDir: outputDir,
                urlPath: "./", 
                filenameFormat: function (id, src, width, format, options) {
                  const extension = path.extname(src);
                  const name = path.basename(src, extension);
                  return `${name}-${width}w.${format}`;
                }
              });

              const imageAttributes = {
                alt: img.getAttribute("alt") || "",
                sizes: "(max-width: 768px) 100vw, 50vw",
                loading: "lazy",
                decoding: "async",
              };

              const pictureHtml = Image.generateHTML(metadata, imageAttributes);
              
              const div = doc.createElement("div");
              div.innerHTML = pictureHtml;
              const picture = div.querySelector("picture");
              
              if (picture) {
                img.parentNode.replaceChild(picture, img);
              }
              
            } catch (e) {
              console.error(`Error processing image ${imagePath}:`, e);
            }
          } else {
            // console.warn(`Image not found: ${imagePath}`);
          }
        }
      }
      
      return dom.serialize();
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  };
};
