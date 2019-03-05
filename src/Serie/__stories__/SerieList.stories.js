import React from "react";

import { storiesOf } from "@storybook/react";
import SerieList from "../SerieList";
import Serie from "../Serie";

storiesOf("SerieList", module).add("default", () => (
  <SerieList>
    <>
      <Serie
        name="Dragon ball"
        imageSource="https://i.kym-cdn.com/photos/images/original/000/987/886/5b0.png"
      />
      <Serie
        name="Dragon ball Z"
        imageSource="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/3eb70ccc-e7ad-4e1a-87fa-f97df9ef1c52/d8rx6aw-7aed38dd-576b-47cc-b0b0-a24803f1f2fe.png/v1/fill/w_1024,h_576,strp/dragon_ball_z__dbz__nuevo_logo_by_saodvd_d8rx6aw-fullview.png"
      />
      <Serie
        name="Dragon ball GT"
        imageSource="https://pngimage.net/wp-content/uploads/2018/05/dragon-ball-gt-logo-png-2.png"
      />
      <Serie
        name="Dragon ball Super"
        imageSource="https://vignette.wikia.nocookie.net/pl.dragonball/images/5/57/Dragon_Ball_Super_Logo.png/revision/latest/scale-to-width-down/320?cb=20150610132828"
      />
    </>
  </SerieList>
));
