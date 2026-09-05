import { arguments_assert } from "./arguments_assert.mjs";
import { tiles_sides } from "./tiles_sides.mjs";
import { property_get } from "./property_get.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_filter } from "./list_filter.mjs";
import { boolean_random } from "./boolean_random.mjs";
export function bless_building_windows_ground(walls) {
  arguments_assert(arguments, 1);
  ("Which squares of a building's ground-floor wall have a window put in them - one coin");
  ("thrown per square, once, when the street is laid out.");
  ("A one-storey house had no windows at all. Its whole front is one band of wall with a door");
  ("in the middle of each family's three squares, and the two squares either side of every");
  ("door were blank - so a low house read as a shed with doors in it, while the tall one next");
  ("to it had glass upstairs. The blank was not saying anything; it was simply the part of");
  ("the wall nothing had been drawn on yet.");
  ("It is asked of the GROUND row of every building and not only of the low ones. A rule that");
  ("gave windows downstairs only to houses with nothing upstairs would be saying that a");
  ("second floor takes the ground floor's windows away, which is not true of any house");
  ("anybody lives in.");
  ("The ground row is read off the walls as their LOWEST row rather than worked out again");
  ("from where the building stands. Which row is the front is already decided when the face");
  ("is laid out, and a second sum for it here is a second answer free to disagree with the");
  ("first the day a house is set back a square further.");
  ("Doors are not among the walls, so they cannot be glazed over. A window is put in a wall");
  ("and a door is a hole in it, and the two lists were parted before this is asked.");
  ("NOT EVERY SQUARE, and that is the whole of what the coin is for. Glass in every blank");
  ("square gives a house one unbroken row of openings, which reads as a shopfront or as an");
  ("office; some plain wall between them is what makes a window read as a window. Half is");
  ("chosen because it is the mix that most often puts a window on one side of a door and");
  ("plain wall on the other, so no two houses in the row wear the same face.");
  ("A DRAW rather than a repeating run, and that is allowed here for exactly the reason a");
  ("set-back is. Nothing is remembered about a window: it moves no family, changes no count,");
  ("and no record is read back through it - so a house may wear a different face on the next");
  ("visit without anything the player earned meaning something else. How many doors and how");
  ("many floors may never be drawn that way, because both of those are how a building is");
  ("known.");
  ("Asked ONCE, when the street is laid out, and carried on the building from then on. Asked");
  ("again while it is being drawn it would answer differently every time the street was");
  ("redrawn, and the windows would blink on and off as the player walked.");
  let sides = tiles_sides(walls);
  let y_front = property_get(sides, "bottom");
  function front_is(tile) {
    let front = property_equals(tile, "y", y_front);
    return front;
  }
  let ground = list_filter(walls, front_is);
  function glazed_is() {
    let put_in = boolean_random();
    return put_in;
  }
  let windows = list_filter(ground, glazed_is);
  return windows;
}
