import React, { PureComponent } from "react";

export default class SerieList extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div class="series">
        <h1>Series</h1>
        {children}
      </div>
    );
  }
}
