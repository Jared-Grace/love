import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_bless_map } from "./app_g_bless_map.mjs";
export function app_g_bless_map_scrolling(container, world) {
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
  let drawn = app_g_bless_map(scroller, world);
  return drawn;
}
