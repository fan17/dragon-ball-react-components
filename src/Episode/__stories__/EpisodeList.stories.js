import React from "react";

import { storiesOf } from "@storybook/react";
import EpisodeList from "../EpisodeList";
import Episode from "../Episode";

storiesOf("EpisodeList", module).add("default", () => (
  <EpisodeList>
    <>
      <Episode
        serieName="Dragon ball"
        number={1}
        title="Great story begins..."
        description="Nice to meet you Son Goku"
      />
      <Episode
        serieName="Dragon ball"
        number={2}
        title="Meet Bulma"
        description="Say hello"
      />
      <Episode
        serieName="Dragon ball"
        number={3}
        title="What is dragon ball?"
        description="Let's find them all"
      />
    </>
  </EpisodeList>
));
