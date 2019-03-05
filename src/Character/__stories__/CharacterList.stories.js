import React from "react";

import { storiesOf } from "@storybook/react";
import CharacterList from "../CharacterList";
import Character from "../Character";

storiesOf("CharacterList", module).add("default", () => (
  <CharacterList>
    <>
      <Character
        name="Son Goku"
        description="Greatest warrior in universe"
        imageSource="https://cdn.atomix.vg/wp-content/uploads/2018/02/goku-ultra-instinct-definitivo.jpg"
      />
      <Character
        name="Vegeta"
        description="The prince of the saiyans"
        imageSource="https://static1.squarespace.com/static/564a7651e4b03f66f2c1023b/56660ca0cbced644c8a0a824/5a7a5fb29140b7403a3121c7/1518014090041/vegeta-blue-dragon_ball_super-anime-2198.jpg?format=2500w"
      />
      <Character
        name="Freezer"
        description="The main antagonist"
        imageSource="https://i.pinimg.com/originals/e8/b3/11/e8b311c63bfff3b547f60f032f7baff6.png"
      />
    </>
  </CharacterList>
));
