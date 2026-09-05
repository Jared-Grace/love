import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_yard_y } from "./bless_block_yard_y.mjs";
import { bless_block_sidewalk_depth } from "./bless_block_sidewalk_depth.mjs";
import { property_get } from "./property_get.mjs";
export function bless_block_walls(x, y, block) {
  arguments_assert(arguments, 3);
  ("HOW FAR THE ROW OF FRONTS REACHES used to be worked out in a step of its own, sitting between here and the sidewalk line. Buildings are no longer all one width, so there was no stride left to multiply, and the length of the row is added up once where the widths are and carried through from there. That left the step handing its record on and doing nothing else, so it is gone and the sidewalk line is read straight.");
  let r = bless_block_yard_y(x, y, block);
  let r2 = bless_block_sidewalk_depth(r);
  let sidewalk_depth = property_get(r2, "sidewalk_depth");
  let block_width = property_get(r2, "block_width");
  let sidewalk_y = property_get(r2, "sidewalk_y");
  let buildings = property_get(r2, "buildings");
  let walls = property_get(r2, "walls");
  let r3 = {
    r2,
    sidewalk_depth,
    block_width,
    sidewalk_y,
    buildings,
    walls,
  };
  return r3;
}
