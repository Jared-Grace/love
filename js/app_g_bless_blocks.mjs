import { arguments_assert } from "./arguments_assert.mjs";
import { bless_blocks_count } from "./bless_blocks_count.mjs";
import { bless_blocks_gap } from "./bless_blocks_gap.mjs";
import { bless_block } from "./bless_block.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat_property } from "./list_concat_property.mjs";
import { tiles_sides } from "./tiles_sides.mjs";
import { add } from "./add.mjs";
import { range_map } from "./range_map.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
import { subtract } from "./subtract.mjs";
import { multiply_add } from "./multiply_add.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { list_take } from "./list_take.mjs";
import { list_get } from "./list_get.mjs";
export function app_g_bless_blocks(rows) {
  arguments_assert(arguments, 1);
  ("Where every block goes in this world - one under another down the middle of it, with open ground between them.");
  ("The middle rather than a corner, because the world is generated fresh each time and the blocks are the only landmarks in it. Laid at an edge they would be blocks most players never found, and the journey between them would run along the water.");
  ("Stacked northward rather than spread about, and that is what makes the second one a PLACE rather than more of the first. Every block faces south, so a column of them is a column of streets each seen from the front - walk off the end of one and the next one is ahead of you, doors and doorsteps and all. Set side by side they would join into a single street twice as long, which is the one thing the second block must not be.");
  ("How big a block is, is MEASURED rather than worked out a second time. Each one is built at the corner of nowhere and its own tiles say how far it reaches, so a building that grew a tile wider cannot leave this spacing them as though it had not.");
  ("EVERY block is measured, not just the first, because the blocks are no longer copies of one another - the run of door counts is longer than a street, so the second road is made of different houses from the first and is a different length because of it. Measured once and that answer used for all of them, the shorter road would be laid as though it were as long as the longest, and every road after the first would sit at the wrong depth.");
  ("Each block is centred on ITS OWN width, so a short street sits in the middle of the world exactly as a long one does. Lined up on a shared left edge instead, the roads would be a ragged stack with all the spare ground on one side, which reads as a mistake rather than as a town. Centred, the player walking north from the end of one street arrives at the front of the next.");
  ("The gap between blocks is added between them and their own depths stacked up, rather than a single stride multiplied out. A stride is only right while every block is the same size, and none of them has to be.");
  ("The world is far wider than the column, which is why nothing here has to cope with a column that will not fit. Should one ever not, the halves would come out negative and the blocks would be laid partly over the ring of water the world is wrapped in - which is drawn as nothing, so the failure would be a street that visibly stops.");
  let count = bless_blocks_count();
  let gap = bless_blocks_gap();
  function measure_at(index) {
    let measured = bless_block(0, 0, index);
    let walls = property_get(measured, "walls");
    let tiles = list_concat_property(walls, measured, "sidewalk");
    let sides = tiles_sides(tiles);
    let right = property_get(sides, "right");
    let width = add(right, 1);
    let bottom = property_get(sides, "bottom");
    let depth = add(bottom, 1);
    let r = {
      width: width,
      depth: depth,
    };
    return r;
  }
  let sizes = range_map(count, measure_at);
  let widths = list_map_property(sizes, "width");
  let depths = list_map_property(sizes, "depth");
  let down_all = list_sum(depths);
  let after_first = subtract(count, 1);
  let column = multiply_add(after_first, gap, down_all);
  let row_first = list_first(rows);
  let world_width = list_size(row_first);
  let world_depth = list_size(rows);
  let spare_y = subtract(world_depth, column);
  let top = divide_floor(spare_y, 2);
  function block_at(index) {
    let before = list_take(depths, index);
    let stacked = list_sum(before);
    let down = multiply_add(index, gap, stacked);
    let y = add(top, down);
    let width = list_get(widths, index);
    let spare_x = subtract(world_width, width);
    let x = divide_floor(spare_x, 2);
    let laid = bless_block(x, y, index);
    return laid;
  }
  let blocks = range_map(count, block_at);
  return blocks;
}
