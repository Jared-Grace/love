import { arguments_assert } from "./arguments_assert.mjs";
import { g_direction_sides } from "./g_direction_sides.mjs";
import { g_direction_opposite } from "./g_direction_opposite.mjs";
import { list_get } from "./list_get.mjs";
export function bless_walk_ways(heading) {
  arguments_assert(arguments, 1);
  ("The ways somebody going about their own business tries, in the order they try them:");
  ("onward first, then the two sides, then back the way they came.");
  ("Onward FIRST is the whole difference between this and being pushed. Somebody shoved out");
  ("of a walker's path is asked for the sides first, because sideways is what opens a lane");
  ("and onward only moves the blockage along it. Nobody is asking anything of this person:");
  ("they are walking somewhere, so the way they were already going is the way they want,");
  ("and a side is what they take to get ROUND whoever is standing in it.");
  ("Back is last for the same reason it is last there - it is room they have just left.");
  ("Taking it is a person giving up on where they were going, which is why the caller reads");
  ("it as turning round rather than as one more step.");
  let sides = g_direction_sides(heading);
  let side = list_get(sides, 0);
  let side_other = list_get(sides, 1);
  let back = g_direction_opposite(heading);
  let ways = [heading, side, side_other, back];
  return ways;
}
