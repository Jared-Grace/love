import { arguments_assert } from "./arguments_assert.mjs";
import { bless_world_new } from "./bless_world_new.mjs";
import { property_get } from "./property_get.mjs";
import { bless_map_scrolling } from "./bless_map_scrolling.mjs";
import { html_div } from "./html_div.mjs";
import { bless_crossing_draw } from "./bless_crossing_draw.mjs";
import { bless_doors_draw } from "./bless_doors_draw.mjs";
import { bless_windows_draw } from "./bless_windows_draw.mjs";
export function bless_street_new(container_map, player_img) {
  arguments_assert(arguments, 2);
  ("A new street, built and drawn: the world with its people and its blocks, the map that scrolls over it, and the crossings, doors and windows laid onto that map. Every game played on this street starts here, and what each one adds goes on top.");
  let world = bless_world_new(player_img);
  let blocks = property_get(world, "blocks");
  let drawn = bless_map_scrolling(container_map, world);
  let div_map = property_get(drawn, "div_map");
  ("The crossings, painted on the road before anything else is laid over it. The rule that");
  ("keeps a walker off the road is enforced where a way is worked out, and this is the only");
  ("place it is SHOWN - so a player who is being routed the long way round to the middle of");
  ("the block can see why.");
  let crossings = html_div(div_map);
  bless_crossing_draw(crossings, blocks);
  ("The doors along the street, drawn once here with the ground they stand in. A door never");
  ("moves, is never earned and cannot be prayed for, so it is made with the map rather than");
  ("worked out again on every step like the marks above it.");
  ("It lies UNDER the lit houses as well as under the halos. A door is part of the building");
  ("it is set into, so when that building lights up the door has to light up with it - and");
  ("it only can while the light is being laid over the door rather than the door over it.");
  let doors = html_div(div_map);
  bless_doors_draw(doors, blocks);
  ("The upper-floor windows, on their own layer beside the doors and for all the same");
  ("reasons. Together the two say how many homes a building holds and on which floor each");
  ("of them lives, which is the ladder the prayer climbs drawn on the street itself.");
  ("Separate from the doors rather than drawn with them, because they are separate things -");
  ("a street of one-storey houses has none of these at all, and a layer that is simply");
  ("empty is easier to read than a call that sometimes draws nothing.");
  let windows = html_div(div_map);
  bless_windows_draw(windows, blocks);
  let street = {
    world,
    drawn,
  };
  return street;
}
