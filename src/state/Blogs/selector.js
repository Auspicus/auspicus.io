export const getBlogsN = (blogStore, sort, n) =>
  blogStore
  .blogs
  .map(blog => blog.fields)
  .sort(sort)
  .slice(0, n);

export const getBlogsOfCategory = blogStore => 
  blogStore
  .blogs
  .filter(blog => blog.category);
  
export const getBlogById = (blogStore, id) => 
  blogStore
  .blogs
  .filter(blog => blog.sys.id.toLowerCase() === id.toLowerCase())
  .map(blog => blog.fields)[0];

export const getBlogBySlug = (blogStore, slug) =>
  blogStore
  .blogs
  .filter(blog => blog.fields.slug.toLowerCase() === slug.toLowerCase())
  .map(blog => blog.fields)[0];