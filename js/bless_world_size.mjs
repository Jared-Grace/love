import { arguments_assert } from "./arguments_assert.mjs";
import { bless_blocks_count } from "./bless_blocks_count.mjs";
import { bless_block_measures } from "./bless_block_measures.mjs";
import { property_get } from "./property_get.mjs";
import { range_map } from "./range_map.mjs";
import { list_max } from "./list_max.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
export function bless_world_size() {
  arguments_assert(arguments, 0);
  ("How many tiles of ground the prayer game needs across, and the same number down.");
  ("It is WORKED OUT from the streets rather than written down, because the streets are what have to fit on it. How wide the buildings are and how many stand in a row are both numbers that change when the picture of a house changes, and a size typed in here would go on being green while quietly cutting the end off a street - the last building would be laid outside the ground, or the whole block placed at a negative square.");
  ("The length of a row is asked for by name rather than worked out here, so that this reading and the one that lays the buildings down cannot come to disagree about how long a street is. It used to multiply a count by a stride and take one alley back off; buildings now differ in width, so there is no stride, and a row's length is added up once where the widths are.");
  ("EVERY street is asked and the LONGEST one wins. The streets are no longer copies of each other, so there is no one length to ask for; the ground has to hold the widest of them, and asking only the first would fit the world to whichever street happened to be laid first and cut the end off any road longer than it. The shorter roads then have ground to spare on both sides, which is what a shorter road should look like.");
  ("One spare tile at each end so the street is not flush against the water, which is the edge of everywhere and cannot be walked on. A player who reaches the last door should still have somewhere to stand beside it.");
  let count = bless_blocks_count();
  function span_at(block) {
    let measures = bless_block_measures(block);
    let span = property_get(measures, "span");
    return span;
  }
  let spans = range_map(count, span_at);
  let widest = list_max(spans);
  let margin = 1;
  let both = multiply(2, margin);
  let size = add(widest, both);
  return size;
}
