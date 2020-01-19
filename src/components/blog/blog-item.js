import React, { Component } from "react";
import { Link } from "react-router-dom";
import striptags from "striptags";
import Truncate from "react-truncate";

const BlogItem = props => {
  const {
    id,
    blog_status,
    content,
    title,
    featured_image_url
  } = props.blogItem;

  return (
    <div className="blog-preview-wrapper">
      <Link to={`/b/${id}`}>
        <div className="blog-item-wrapper">
          <div className="blog-img-wrapper">
            <img src={featured_image_url} />
          </div>
          <div className="blog-text-wrapper">
            <h2>{title}</h2>
            <div>
              <Truncate lines={2} ellipsis={<span>{"... "}</span>}>
                {striptags(content)}
              </Truncate>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
