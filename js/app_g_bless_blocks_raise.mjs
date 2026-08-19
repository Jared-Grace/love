import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_buildings_raise } from "./app_g_bless_buildings_raise.mjs";
import { app_g_bless_tiles_pave } from "./app_g_bless_tiles_pave.mjs";
import { bless_tile_pavement } from "./bless_tile_pavement.mjs";
export function app_g_bless_blocks_raise(rows, blocks) {
  arguments_assert(arguments, 2);
  ("Builds every block into the ground - the buildings stood up, and the pavement in front");
  ("of them and the alleys between them laid down.");
  ("Each block is finished before the next is begun, which is safe here because no two of");
  ("them share a tile: they are laid in a column with open ground between, so the order");
  ("they are built in cannot change what the world comes out as.");
  ("Paving comes after raising within a block, and that is the same reason the block is");
  ("raised before the reachable land is asked for. Building CHANGES what the ground is,");
  ("and every later question about it has to be asked of what is there now.");
  let item_pavement = bless_tile_pavement();
  function block_raise(block) {
    let buildings = property_get(block, "buildings");
    let alleys = property_get(block, "alleys");
    let sidewalk = property_get(block, "sidewalk");
    app_g_bless_buildings_raise(rows, buildings);
    let paved = list_concat(alleys, sidewalk);
    app_g_bless_tiles_pave(rows, paved, item_pavement);
  }
  each(blocks, block_raise);
}
