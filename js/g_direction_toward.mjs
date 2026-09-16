import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function g_direction_toward(from, to) {
  arguments_assert(arguments, 2);
  ("Which way somebody standing on one square should turn to face another one, however far");
  ("apart the two are.");
  ("The plain step direction answers only for a NEIGHBOUR - it asks whether the difference");
  ("across is exactly one square and then whether the difference down is, and anything");
  ("further away falls out of the bottom of it facing north. That is right for a walk, which");
  ("is a list of single steps and never asks about anywhere else; it is wrong the moment two");
  ("people several squares apart are meant to be looking at each other, and it is wrong");
  ("silently, because north is a real answer and nothing about it says it was the fallback.");
  ("The LARGER of the two differences decides, because a person can only face four ways and");
  ("the honest one of the four is whichever is nearer to true. Somebody five squares east and");
  ("one square north is very nearly due east of you, and facing north at them would read as");
  ("looking past them at nothing.");
  ("A tie goes ACROSS rather than down. The two are equally wrong on a perfect diagonal, so");
  ("what settles it is that this street runs east and west - the walker, the traffic, the");
  ("crossing and the pavements are all laid out along it, so an across answer is the one that");
  ("agrees with everything else on the screen.");
  ("Two people on the SAME square come back facing west, which is a real answer to a question");
  ("that has none. Nothing can stand where somebody else already is, so it costs nothing to");
  ("let the tie rule run off the end rather than to invent a refusal that no caller can act");
  ("on.");
  let to_x = property_get(to, "x");
  let from_x = property_get(from, "x");
  let across = numbers_apart(to_x, from_x);
  let to_y = property_get(to, "y");
  let from_y = property_get(from, "y");
  let down = numbers_apart(to_y, from_y);
  let sideways = greater_than_equal(across, down);
  if (sideways) {
    let east_is = greater_than(to_x, from_x);
    if (east_is) {
      let east = "east";
      return east;
    }
    let west = "west";
    return west;
  }
  let south_is = greater_than(to_y, from_y);
  if (south_is) {
    let south = "south";
    return south;
  }
  let north = "north";
  return north;
}
