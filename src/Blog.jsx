import React from 'react';
import blogSeed from './blogSeed';

const Blog = (props) => {
  return (
    <div>
      <h1>Blog</h1>
      { 
      blogSeed.map( (blog, index) => {
        return (
            <div key={`blog-${index}`}>
              <h3 key={`title-${index}`}> { blog.title } </h3>
              <p key={`paragraph-${index}`}> { blog.content } </p>
            </div>
          )
        }) 
      }
    </div>
  );
};

export default Blog;