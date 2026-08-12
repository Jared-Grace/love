import { property_get } from "./property_get.mjs";
import { or } from "./or.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
export function g_coordinates_sides(coordinates, direction) {
  "the two tiles to either side of somebody who is facing this way - their left and their right.";
  "Facing east or west, the sides are north and south; facing north or south, they are east and west. Asked when somebody has to get out of the way of a walk: stepping to the SIDE is what opens the way, because stepping forward or back stays on it.";
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  let east = equal(direction, "east");
  let west = equal(direction, "west");
  let along_x = or(east, west);
  if (along_x) {
    let sides = [
      {
        x,
        y: add(y, 1),
      },
      {
        x,
        y: subtract(y, 1),
      },
    ];
    return sides;
  }
  let sides_across = [
    {
      x: add(x, 1),
      y,
    },
    {
      x: subtract(x, 1),
      y,
    },
  ];
  return sides_across;
}
