import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Episode extends PureComponent {
  static propTypes = {
    serieName: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  render() {
    const { serieName, number, title, description } = this.props;
    return (
      <div class="episode">
        <div class="episode-content">
          <div class="media-content">
            <p class="title is-4">{serieName}</p>
            <p class="title is-4">{number}</p>
            <p class="title is-4">{title}</p>
          </div>
        </div>

        <div class="content">{description}</div>
      </div>
    );
  }
}
