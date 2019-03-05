import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class serie extends PureComponent {
  static propTypes = {
    imageSource: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  render() {
    const { imageSource, name } = this.props;
    return (
      <div class="serie">
        <div class="serie-image">
          <img width="400" src={imageSource} alt="Placeholder" />
        </div>
        <div class="serie-content">
          <div class="media-content">
            <p class="title is-4">{name}</p>
          </div>
        </div>
      </div>
    );
  }
}
