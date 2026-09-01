import { arguments_assert } from "./arguments_assert.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
export function bless_building_shape() {
  arguments_assert(arguments, 0);
  ("What one building looks like from above - how many tiles across its front, how many deep");
  ("it stands, how wide the alley between it and the next one is, and how far apart its");
  ("doors sit along the front.");
  ("They belong together because they are one proportion rather than four settings. A");
  ("building wider than it is deep reads as a frontage on a street, which is what a person");
  ("walking past actually sees; make it square and the row stops looking like buildings and");
  ("starts looking like a wall with notches in it.");
  ("The alley is a single tile, and it is what stops the row being one long building. It is");
  ("deliberately too narrow to be somewhere anybody goes - a gap you could walk down would");
  ("be a second street, and this game has one.");
  ("The doors stand every other square, so each one has the building's own material to its");
  ("left and its right. Three doors touching read as one wide opening rather than three");
  ("homes, and the whole reason the doors are drawn at all is that a player should be able");
  ("to count the families in a building by looking at it. A thing is only countable when");
  ("there is something in between the things being counted.");
  ("The wall runs one square PAST the doors at each end, so the outermost doors have wall on");
  ("both sides too. A door hard against the alley has the next building's gap on one side of");
  ("it, and then it is not a hole in a wall any more - it reads as the alley widening, and");
  ("the player counting homes counts one fewer. The end squares cost two tiles of width and");
  ("they are what turn a row of openings into a wall with openings in it.");
  ("The width is therefore WORKED OUT from how many families live in a building rather than");
  ("typed, and that is what keeps the front honest: a door for each family, a wall square");
  ("in every gap, and a wall square at each end comes to two apiece plus one. Written down");
  ("instead, the two numbers would drift the first time a building held a different number");
  ("of homes, and the front row would go on being drawn - just no longer saying anything");
  ("true about who lives behind it.");
  ("It comes out ODD, which is what puts the doors on the odd squares and the wall on the");
  ("even ones, the two ends included.");
  ("The depth is two because only the front row is wall the player looks at; the row behind");
  ("it is roof, and one row of roof is enough to say the building has a top without eating");
  ("the street.");
  let sizes = bless_place_sizes();
  let families = property_get(sizes, "building");
  let door_stride = 2;
  let spans = multiply(families, door_stride);
  let ends = 1;
  let width = add(spans, ends);
  let shape = {
    width: width,
    depth: 2,
    gap: 1,
    door_stride: door_stride,
  };
  return shape;
}
