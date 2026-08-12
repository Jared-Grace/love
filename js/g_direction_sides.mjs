import { or } from "./or.mjs";
import { equal } from "./equal.mjs";
export function g_direction_sides(direction) {
  "the two ways that are to either side of this one - the left hand and the right hand of somebody facing it.";
  "Facing east or west, the sides are south and north; facing north or south, they are east and west. Asked when somebody has to get out of the way of a walk coming at them, because stepping to a SIDE is what opens a way and stepping forward or back only moves the blockage along it.";
  let east = equal(direction, "east");
  let west = equal(direction, "west");
  let along_x = or(east, west);
  if (along_x) {
    let sides = ["south", "north"];
    return sides;
  }
  let sides_across = ["east", "west"];
  return sides_across;
}
