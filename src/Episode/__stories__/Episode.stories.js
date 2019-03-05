import React from "react";

import { storiesOf } from "@storybook/react";
import Episode from "../Episode";

storiesOf("Episode", module).add("default", () => (
  <Episode
    serieName="Dragon ball"
    number={1}
    title="Great story begins..."
    description="Nice to meet you Son Goku"
  />
));
