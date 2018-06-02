import React, { Component } from "react";

import "../css/buttonTop.css";

export default class ButtonUp extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.showButton.bind(this), false);
  }

  showButton() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
      this.buttonTop.classList.add("buttonTop_show");
    } else {
      this.buttonTop.classList.remove("buttonTop_show");
    }
  }

  handleUp() {
    const t = setInterval(up, 10);
    function up() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        window.scrollBy(0, -100);
      } else {
        clearInterval(t);
      }
      return false;
    }
  }

  render() {
    return (
      <div
        className="buttonTop"
        onClick={this.handleUp}
        ref={btn => {
          this.buttonTop = btn;
        }}
      >
        TOP
      </div>
    );
  }
}
