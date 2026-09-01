import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { property_get } from "./property_get.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { add } from "./add.mjs";
export function bless_block_measures() {
  arguments_assert(arguments, 0);
  ("Every number one street of the prayer game is laid out from - how wide a building is, how deep, what stands between two of them, how many stand in the row, and how far along the next one starts.");
  ("★ TWO READINGS OF THE SAME STREET WERE EACH WORKING THESE OUT FOR THEMSELVES. One lays the buildings down and the other says how much ground the row needs, and both began with the same run of lines asking the picture of a house how big it is and the list of places how many houses there are. Two copies of an arithmetic do not break, they drift: the day a house is drawn wider, whichever of the two was not remembered goes on being green while laying the last building outside the ground.");
  ("HOW FAR ALONG THE NEXT ONE STARTS IS THE ONE NUMBER THAT IS NOT ASKED FOR ANYWHERE. It is the width and the gap added, and it was added in both places. It belongs beside the numbers it is made of, so that nothing has to remember which two of them make it.");
  let shape = bless_building_shape();
  let width = property_get(shape, "width");
  let depth = property_get(shape, "depth");
  let gap = property_get(shape, "gap");
  let sizes = bless_place_sizes();
  let count = property_get(sizes, "block");
  let stride = add(width, gap);
  let r = {
    width,
    depth,
    gap,
    count,
    stride,
  };
  return r;
}
