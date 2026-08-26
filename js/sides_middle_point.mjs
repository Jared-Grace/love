import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { divide } from "./divide.mjs";
export function sides_middle_point(sides) {
  arguments_assert(arguments, 1);
  ("The place halfway across and halfway down a box, worked out from the box's four edges.");
  ("The four edges are asked for rather than a measured rectangle, so that a box arrived at by hand - one edge moved inwards to leave room for something standing in front of it - can be asked this same question as easily as one read straight off an element.");
  let left = property_get(sides, "left");
  let top = property_get(sides, "top");
  let right = property_get(sides, "right");
  let bottom = property_get(sides, "bottom");
  let across = add(left, right);
  let x = divide(across, 2);
  let down = add(top, bottom);
  let y = divide(down, 2);
  let point = {
    x,
    y,
  };
  return point;
}
