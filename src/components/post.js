import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/post.css";

const Post = ({ post }) => (

  <div className="col-md-3 col-xs-4 post">
    <Link className="post__link" to={`gallery/${post.id}`}>
      <div className="post__container">
        <div className="post__image-container">
{/*<div>{console.log(post.link)}</div>*/}


          <img
              className="post__image"
              src={
                  post.cover
                      ? `http://i.imgur.com/${post.cover}b.jpg`
                      : `http://i.imgur.com/${post.id}b.jpg`
              }
          />

          {/*<div className="post__image">*/}
              {/*{(post.images &&*/}
                  {/*post.images[0].animated && (*/}
                      {/*<video preload="auto" autoPlay="autoplay" loop="loop" height="250px" width="250px">*/}
                        {/*<source src={post.images[0].mp4} type="video/mp4" />*/}
                      {/*</video>*/}
                  {/*)) ||*/}

              {/*(post.images && (*/}
                  {/*<img src={post.images[0].link} alt={post.title} height="250px" width="250px"/>*/}
              {/*)) || <img src={post.link} alt={post.title} height="250px" width="250px"/>}*/}
          {/*</div>*/}

        </div>

        {/*<p className="post__title">{post.title}</p>*/}
          {/*<div className="post__statistic">*/}
              {/*<p>{post.views} views</p>*/}
              {/*<p>{post.points} points</p>*/}
          {/*</div>*/}

      </div>
    </Link>
  </div>
);

export default Post;
