import React, { PureComponent } from "react";

export default class EpisodeList extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div class="episodes">
        <h1>Episodes</h1>
        {children}
      </div>
    );
  }
}
