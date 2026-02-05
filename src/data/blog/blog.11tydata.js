module.exports = {
  layout: "post",
  tags: ["post"],
  permalink: function(data) {
    const parts = data.page.filePathStem.split('/');
    const fileName = parts[parts.length - 1];
    
    // If it ends in 'index', it was index.md
    if (fileName === 'index') {
      // parts: ['', 'data', 'blog', 'YYYY', 'MM', 'slug', 'index']
      if (parts.length >= 6) {
        const slug = parts[parts.length - 2];
        const month = parts[parts.length - 3];
        const year = parts[parts.length - 4];
        return `/blog/${year}/${month}/${slug}/`;
      }
    }
    
    // Fallback
    return `/blog/${data.page.fileSlug}/`;
  }
};
