import React from "react";

import { storiesOf } from "@storybook/react";
import Character from "../Character";

storiesOf("Character", module).add("default", () => (
  <Character
    name="Son Goku"
    description="Greatest warrior in universe"
    imageSource="https://cdn.atomix.vg/wp-content/uploads/2018/02/goku-ultra-instinct-definitivo.jpg"
  />
));
