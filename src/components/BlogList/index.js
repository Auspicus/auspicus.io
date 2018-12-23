import React from 'react';

import BlogTeaser from '../BlogTeaser';

import './styles.css';

const BlogList = props => {
  const limit = props.limit || 3;
  let loadingBlogs = props.loading === false
    ? props.blogs
    : Array(limit).fill({});
  let blogs = loadingBlogs
    .filter((_, i) => i < limit)
    .map((blog, i) => {
      let imgSrc;
      let imgAlt;
      let slug;
      let title;
      let published;
      let timeToRead;
      
      if (props.loading === false) {
        slug = blog.slug;
        title = blog.title;
        published = blog.published;
        timeToRead = Math.floor(blog.body.split(' ').length / 150);

        if (blog.teaser) {
          imgSrc = blog.teaser.fields.file.url;
          imgAlt = blog.teaser.fields.title;
        }
      }

      return !props.loading ? (
        <BlogTeaser
          key={slug}
          to={slug}
          src={imgSrc}
          alt={imgAlt}
          title={title}
          published={published}
          timeToRead={timeToRead}
          loading={props.loading}
        />
      ) : null;
    });

  return (
    <div className="blog-list">
      <ul className="blog-list__list">
        {blogs}
      </ul>
    </div>
  );
}

export default BlogList;
