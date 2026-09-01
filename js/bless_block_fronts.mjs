import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_sidewalk_y } from "./bless_block_sidewalk_y.mjs";
import { property_get } from "./property_get.mjs";
export function bless_block_fronts(x, y) {
  arguments_assert(arguments, 2);
  ("How far the row of fronts reaches used to be worked out here, as the number of buildings times a single stride. Buildings are no longer all one width, so there is no stride to multiply, and the length of the row is now added up once where the widths are and carried through from there.");
  let r = bless_block_sidewalk_y(x, y);
  let sidewalk_y = property_get(r, "sidewalk_y");
  let gap = property_get(r, "gap");
  let span = property_get(r, "span");
  let buildings = property_get(r, "buildings");
  let walls = property_get(r, "walls");
  let alleys = property_get(r, "alleys");
  let r2 = {
    sidewalk_y,
    gap,
    buildings,
    walls,
    alleys,
    span,
  };
  return r2;
}
