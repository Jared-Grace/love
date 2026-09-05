import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_alleys } from "./bless_block_alleys.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export function bless_block_yard_y(x, y, block) {
  arguments_assert(arguments, 3);
  let r = bless_block_alleys(x, y, block);
  let alleys = property_get(r, "alleys");
  let walls = property_get(r, "walls");
  let buildings = property_get(r, "buildings");
  let span = property_get(r, "span");
  let count = property_get(r, "count");
  let depth = property_get(r, "depth");
  ("Where the GROUND begins - the first row south of the fronts, with nothing between it and them. A door opens straight onto it, so a doorstep and this row are the same row for a house standing flush in its slot.");
  ("It used to be the row the pavement was laid on and it is grass now, which is the only thing that changed here. The pavement moved a row down into the middle of the green band; this is still the first row a person coming out of a door can stand on, and everything below it is measured from here.");
  let yard_y = add(y, depth);
  let r2 = {
    alleys,
    walls,
    buildings,
    span,
    count,
    yard_y,
  };
  return r2;
}
