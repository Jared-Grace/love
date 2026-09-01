import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_measures } from "./bless_block_measures.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
export function bless_world_size() {
  arguments_assert(arguments, 0);
  ("How many tiles of ground the prayer game needs across, and the same number down.");
  ("It is WORKED OUT from the street rather than written down, because the street is what has to fit on it. A building's width and how many stand in a row are both numbers that change when the picture of a house changes, and a size typed in here would go on being green while quietly cutting the end off the street - the last building would be laid outside the ground, or the whole block placed at a negative square.");
  ("The numbers themselves are asked for by name rather than worked out here, so that this reading and the one that lays the buildings down cannot come to disagree about how long the street is.");
  ("One spare tile at each end so the street is not flush against the water, which is the edge of everywhere and cannot be walked on. A player who reaches the last door should still have somewhere to stand beside it.");
  let measures = bless_block_measures();
  let gap = property_get(measures, "gap");
  let count = property_get(measures, "count");
  let stride = property_get(measures, "stride");
  let left = multiply(count, stride);
  let span = subtract(left, gap);
  let margin = 1;
  let right = multiply(2, margin);
  let size = add(span, right);
  return size;
}
