import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_max } from "./list_max.mjs";
import { list_size } from "./list_size.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
import { range_map } from "./range_map.mjs";
import { subtract } from "./subtract.mjs";
import { bless_block } from "./bless_block.mjs";
import { bless_blocks_count } from "./bless_blocks_count.mjs";
import { bless_blocks_gap } from "./bless_blocks_gap.mjs";
export function app_g_bless_blocks(rows) {
  arguments_assert(arguments, 1);
  ("Where every block goes in this world - one under another down the middle of it, with");
  ("open ground between them.");
  ("The middle rather than a corner, because the world is generated fresh each time and");
  ("the blocks are the only landmarks in it. Laid at an edge they would be blocks most");
  ("players never found, and the journey between them would run along the water.");
  ("Stacked northward rather than spread about, and that is what makes the second one a");
  ("PLACE rather than more of the first. Every block faces south, so a column of them is a");
  ("column of streets each seen from the front - walk off the end of one and the next one");
  ("is ahead of you, doors and doorsteps and all. Set side by side they would join into a");
  ("single street twice as long, which is the one thing the second block must not be.");
  ("How big a block is, is MEASURED rather than worked out a second time. One is built at");
  ("the corner of nowhere and its own tiles say how far it reaches, so a building that");
  ("grew a tile wider cannot leave this spacing them as though it had not.");
  ("The world is far wider than the column, which is why nothing here has to cope with a");
  ("column that will not fit. Should one ever not, the halves would come out negative and");
  ("the blocks would be laid partly over the ring of water the world is wrapped in - which");
  ("is drawn as nothing, so the failure would be a street that visibly stops.");
  let measured = bless_block(0, 0);
  let walls = property_get(measured, "walls");
  let sidewalk = property_get(measured, "sidewalk");
  let tiles = list_concat(walls, sidewalk);
  function x_of(tile) {
    let tile_x = property_get(tile, "x");
    return tile_x;
  }
  function y_of(tile) {
    let tile_y = property_get(tile, "y");
    return tile_y;
  }
  let xs = list_map(tiles, x_of);
  let ys = list_map(tiles, y_of);
  let left = list_max(xs);
  let width = add(left, 1);
  let left2 = list_max(ys);
  let depth = add(left2, 1);
  let count = bless_blocks_count();
  let gap = bless_blocks_gap();
  let stride = add(depth, gap);
  let left3 = subtract(count, 1);
  let spans = multiply(left3, stride);
  let column = add(spans, depth);
  let row_first = list_first(rows);
  let world_width = list_size(row_first);
  let world_depth = list_size(rows);
  let spare_x = subtract(world_width, width);
  let spare_y = subtract(world_depth, column);
  let x = divide_floor(spare_x, 2);
  let top = divide_floor(spare_y, 2);
  function block_at(index) {
    let down = multiply(index, stride);
    let y = add(top, down);
    let block = bless_block(x, y);
    return block;
  }
  let blocks = range_map(count, block_at);
  return blocks;
}
