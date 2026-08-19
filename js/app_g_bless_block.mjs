import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_max } from "./list_max.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { bless_block } from "./bless_block.mjs";
export function app_g_bless_block(rows) {
  arguments_assert(arguments, 1);
  ("Where the one block goes in this world - the middle of it.");
  ("The middle rather than a corner, and rather than wherever the player happens to be. The");
  ("world is generated fresh each time and the block is the only landmark in it, so a block");
  ("at a corner would be a block most players never found; and the player is now set down ON");
  ("the block instead of the block being fitted around the player, which is the same");
  ("question asked the easy way round.");
  ("How big the block is, is MEASURED rather than worked out a second time. Built once at");
  ("the corner of nowhere, its own tiles say how far it reaches, and the sum that laid it");
  ("out is not written down twice - so a building that grew a tile wider cannot leave this");
  ("centring it as though it had not.");
  ("The world is far wider than the block, which is why nothing here has to cope with a");
  ("block that will not fit. Should one ever not, the halves would come out negative and it");
  ("would be laid partly over the ring of water the world is wrapped in - which is drawn as");
  ("nothing, so the failure would be a street that visibly stops.");
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
  let width = add(list_max(xs), 1);
  let depth = add(list_max(ys), 1);
  let row_first = list_first(rows);
  let world_width = list_size(row_first);
  let world_depth = list_size(rows);
  let spare_x = subtract(world_width, width);
  let spare_y = subtract(world_depth, depth);
  let x = divide_floor(spare_x, 2);
  let y = divide_floor(spare_y, 2);
  let block = bless_block(x, y);
  return block;
}
