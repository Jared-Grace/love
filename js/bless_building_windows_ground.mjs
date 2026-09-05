import { arguments_assert } from "./arguments_assert.mjs";
import { list_size_half_ceil } from "./list_size_half_ceil.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_equals } from "./property_equals.mjs";
import { and } from "./and.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
export function bless_building_windows_ground(walls, doorways) {
  arguments_assert(arguments, 2);
  ("Which squares of a building's ground-floor wall have a window put in them - ONE beside");
  ("every door, with the sides shared out as evenly as the doors allow, decided once when the");
  ("street is laid out.");
  ("A one-storey house had no windows at all. Its whole front is one band of wall with a door");
  ("in the middle of each family's three squares, and the two squares either side of every");
  ("door were blank - so a low house read as a shed with doors in it, while the tall one next");
  ("to it had glass upstairs. The blank was not saying anything; it was simply the part of");
  ("the wall nothing had been drawn on yet.");
  ("It is asked of every building and not only of the low ones. A rule that gave windows");
  ("downstairs only to houses with nothing upstairs would be saying that a second floor takes");
  ("the ground floor's windows away, which is not true of any house anybody lives in.");
  ("ONE PER DOOR, so every home gets a window and exactly half the blank wall is glazed. A");
  ("coin thrown separately at each square gives that half only on average, and a house is not");
  ("an average: a quarter of homes come out with plain wall on both sides of the door, which");
  ("is the shed this was built to stop arriving one home at a time, and a quarter come out");
  ("glazed on both sides, so a narrow house reads as an unbroken row of openings.");
  ("HOW MANY doors take their window on the left is settled for the whole building first, and");
  ("only then is it drawn WHICH of them do. A side chosen freshly at each door is the same");
  ("coin again one level up: a house with three doors comes out all-left or all-right one time");
  ("in four, and a long house with every window on the same side of every door draws a");
  ("repeating stripe - which is exactly the stamped-out row the varied widths and heights were");
  ("put there to break up. Sharing a fixed count out among the doors makes that impossible for");
  ("any house with more than one of them.");
  ("The count is half, rounded up or down BY A COIN rather than always up. Always rounding up");
  ("would send the single window of every one-door house to the left, and the same window in");
  ("the same place on every narrow house is the stripe again, on the buildings least able to");
  ("hide it. With the rounding drawn, a one-door house is an even chance either way and a");
  ("three-door house splits two-and-one in whichever direction the coin fell.");
  ("A DRAW rather than a repeating run, and that is allowed here for exactly the reason a");
  ("set-back is. Nothing is remembered about a window: it moves no family, changes no count,");
  ("and no record is read back through it - so a house may wear a different face on the next");
  ("visit without anything the player earned meaning something else. How many doors and how");
  ("many floors may never be drawn that way, because both of those are how a building is");
  ("known.");
  ("The doors are copied before they are shuffled. Shuffling is done in place, and the list");
  ("handed in here is the building's own list of doorways, which everything else on the map");
  ("reads to know where the homes are.");
  ("The square itself is taken from the WALLS beside the door rather than made up from its");
  ("position. A window has to be in a wall, and the walls are the one list that already knows");
  ("which squares this building actually covers; a square worked out as one-to-the-left of a");
  ("door is a coordinate that nothing has agreed is part of the house. Doors are not among the");
  ("walls, so they cannot be glazed over either.");
  ("Asked ONCE, when the street is laid out, and carried on the building from then on. Asked");
  ("again while it is being drawn it would answer differently every time the street was");
  ("redrawn, and the windows would blink on and off as the player walked.");
  function lefts_count() {
    let up = list_size_half_ceil(doorways);
    let rounded_up = boolean_random();
    if (rounded_up) {
      return up;
    }
    let size = list_size(doorways);
    let down = subtract(size, up);
    return down;
  }
  let order = list_copy(doorways);
  let count = lefts_count();
  let lefties = list_shuffle_take(order, count);
  function window_x_get(door_x, left_is) {
    if (left_is) {
      let left = subtract(door_x, 1);
      return left;
    }
    let right = add(door_x, 1);
    return right;
  }
  function door_window(door) {
    let door_x = property_get(door, "x");
    let door_y = property_get(door, "y");
    let left_is = list_includes(lefties, door);
    let window_x = window_x_get(door_x, left_is);
    function beside_is(tile) {
      let level = property_equals(tile, "y", door_y);
      let placed = property_equals(tile, "x", window_x);
      let beside = and(level, placed);
      return beside;
    }
    let candidates = list_filter(walls, beside_is);
    let chosen = list_first(candidates);
    return chosen;
  }
  let windows = list_map(doorways, door_window);
  return windows;
}
