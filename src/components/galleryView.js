import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { asyncComments } from "../actions/comments";
import { GalleryInfo } from "./galleryInfo.js";
import { GalleryBody } from "./galleryBody.js";
import GalleryComments from "./comments.js";

import "../css/gallery.css";

class GalleryView extends Component {
  componentDidMount() {
    this.props.getComments(this.props.gallery.id);
  }

  componentWillUnmount() {
    this.props.getComments(this.props.gallery.id, true);
  }

  render() {
    const { gallery, comments } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <Link className="gallery__home-link" to="/">
            Home
          </Link>
        </div>
        <div className="col-md-8">
          <GalleryBody gallery={gallery} />
          <GalleryComments comments={comments} />
        </div>
        <div className="col-md-4">
          <GalleryInfo gallery={gallery} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  gallery: state.galleriesList.find(i => i.id === match.params.galleryId),
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  getComments: (id, clear) => {
    dispatch(asyncComments(id, clear));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(GalleryView)
);
