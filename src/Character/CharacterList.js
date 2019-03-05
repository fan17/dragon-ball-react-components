import React, { PureComponent } from "react";

export default class CharacterList extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div class="characters">
        <h1>Characters</h1>
        {children}
      </div>
    );
  }
}
