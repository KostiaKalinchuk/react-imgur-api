import React from "react";

export const GalleryInfo = props => {
  const { gallery } = props;
  return (
    <div className="gallery-info">
      <p className="gallery-info__text">
        Views: <span className="gallery-info__count">{gallery.views}</span>
      </p>
      <p className="gallery-info__text">
        Points: <span className="gallery-info__count">{gallery.points}</span>
      </p>
      <p className="gallery-info__text">
        Score: <span className="gallery-info__count">{gallery.score}</span>
      </p>
      <p className="gallery-info__text">
        Ups: <span className="gallery-info__count">{gallery.ups}</span>
      </p>
      <p className="gallery-info__text">
        Downs: <span className="gallery-info__count">{gallery.downs}</span>
      </p>
      <p className="gallery-info__text">
        Favorite count:{" "}
        <span className="gallery-info__count">{gallery.favorite_count}</span>
      </p>
      <div className="gallery-info__row">
        <div className="">
          <p className="gallery-info__text">Tags:</p>
        </div>
        {gallery.tags.length ? (
          gallery.tags.map((tag, index) => {
            return (
              <div key={index} className="gallery-info__tag-wrapper">
                <p className="gallery-info__tag">{tag.display_name}</p>
              </div>
            );
          })
        ) : (
          <div className="col">There are no tags :(</div>
        )}
      </div>
    </div>
  );
};
