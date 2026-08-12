import { g_coordinates_sides } from "./g_coordinates_sides.mjs";
import { g_coordinates_first_free } from "./g_coordinates_first_free.mjs";
import { null_is } from "./null_is.mjs";
import { g_coordinates_orthogonal } from "./g_coordinates_orthogonal.mjs";
import { not } from "./not.mjs";
export function g_coordinates_aside(free_index, kept_index, tile, direction) {
  "where somebody standing here should step so as to be out of the way of a walk coming this way - to one side if either side will have them, and otherwise anywhere at all they can stand.";
  "The sides are tried first because stepping sideways is what OPENS a way: a crowd standing across a path and each stepping to their nearer side leaves a lane straight down the middle. Stepping forward or back would only move the blockage one tile along it.";
  "Anywhere-at-all is the second answer rather than the first, and it is what covers somebody with a wall on both sides who can still back into a corner. When there is nowhere at all, nothing is returned - a person can be too hemmed in to be polite, and then the walker passes them by trading places instead.";
  let sides = g_coordinates_sides(tile, direction);
  let side = g_coordinates_first_free(free_index, kept_index, sides);
  let none = null_is(side);
  if (not(none)) {
    return side;
  }
  let around = g_coordinates_orthogonal(tile);
  let anywhere = g_coordinates_first_free(free_index, kept_index, around);
  return anywhere;
}
