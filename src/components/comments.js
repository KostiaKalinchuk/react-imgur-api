import React, { Component } from "react";

export default class GalleryComments extends Component {
  render() {
    const { comments = [] } = this.props;
    return (
      <div className="gallery-comments">
        {comments.map(comment => {
          return (
            <div key={comment.id} className="gallery-comment__container">
              <div className="gallery-comment">
                <p className="gallery-comment__author">{comment.author}</p>
                <p className="gallery-comment__text">{comment.comment}</p>
                <div className="gallery-comment__info">
                  <p className="gallery-comment__info-text">
                    Points: {comment.points}
                  </p>
                  <p className="gallery-comment__info-text">
                    Platform: {comment.platform}
                  </p>
                </div>
              </div>
              {comment.children.length && (
                <div className="gallery-comment__replies-container">
                  <ShowRepliesButton count={comment.children.length} />
                  <div className="gallery-comments gallery-comment__replies">
                    {comment.children.map(replie => {
                      return (
                        <div
                          key={replie.id}
                          className="gallery-comment gallery-comment__replies-comment"
                        >
                          <p className="gallery-comment__author">
                            {replie.author}
                          </p>
                          <p className="gallery-comment__text">
                            {replie.comment}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

class ShowRepliesButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  showReplies(event) {
    const replies = event.target.nextSibling;
    replies.classList.toggle("gallery-comment__replies_show");
    this.setState({ open: !this.state.open });
  }

  render() {
    const { count } = this.props;
    return (
      <div
        onClick={e => this.showReplies(e)}
        className="gallery-comment__button"
      >
        {this.state.open
          ? `- Collapse`
          : `+ ${count} replies`}
      </div>
    );
  }
}
