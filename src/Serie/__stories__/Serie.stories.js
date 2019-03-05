import React from "react";

import { storiesOf } from "@storybook/react";
import Serie from "../Serie";

storiesOf("Serie", module).add("default", () => (
  <Serie
    name="Dragon ball"
    imageSource="https://i.kym-cdn.com/photos/images/original/000/987/886/5b0.png"
  />
));
