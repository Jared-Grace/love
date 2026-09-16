import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { bless_map } from "./bless_map.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function bless_map_scrolling(container, world) {
  arguments_assert(arguments, 2);
  ("Draws the praying game's street inside a box of its own that fills the container and scrolls, and hands back everything the drawing made.");
  ("THE MAP GETS ITS OWN BOX RATHER THAN SCROLLING THE CONTAINER, because the container also holds the things that must stay where they are while the street moves under them - the strip of buttons along the bottom, the arrow leaning off the edge towards the next person to pray for. A fixture inside the thing that scrolls travels away with the ground it is sitting on.");
  ("The box is made before the drawing goes into it, so the ground is measured against a box that is already the size of the screen rather than one that grows around it afterwards.");
  let scroller = html_div(container);
  html_style_assign(scroller, {
    position: "absolute",
    inset: "0",
    overflow: "auto",
  });
  let drawn = bless_map(scroller, world);
  ("The map is told which screen it was drawn on, because a camera journey needs the screen");
  ("and almost nobody who asks for one is holding it. A walk is handed the map and the");
  ("player and nothing else, and threading the screen down to it would mean widening every");
  ("step between here and there to carry something none of them use.");
  ("This is the same answer the crowd already got: a fact about a particular map is written");
  ("onto that map, once, where it is made, and everything downstream asks the map.");
  let div_map = property_get(drawn, "div_map");
  property_set(div_map, "container_map", container);
  return drawn;
}
