import { arguments_assert } from "./arguments_assert.mjs";
import { each_index } from "./each_index.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_buildings_raise } from "./app_g_bless_buildings_raise.mjs";
import { app_g_bless_tiles_pave } from "./app_g_bless_tiles_pave.mjs";
import { bless_block_pavement } from "./bless_block_pavement.mjs";
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
  ("A block is built knowing WHERE IT IS in the world, and that is the only reason its own");
  ("index is carried in. Nothing about how a block is shaped depends on it - the two are");
  ("laid out identically on purpose - but what it is MADE of does, so that the player who");
  ("walks from one to the other can see they have arrived somewhere rather than gone round");
  ("in a circle. It is the cheapest thing the game can say and it says the whole design:");
  ("the reach was earned here and is worth spending there.");
  function block_raise(block, index) {
    let buildings = property_get(block, "buildings");
    let alleys = property_get(block, "alleys");
    let sidewalk = property_get(block, "sidewalk");
    app_g_bless_buildings_raise(rows, buildings, index);
    let paved = list_concat(alleys, sidewalk);
    let item_pavement = bless_block_pavement(index);
    app_g_bless_tiles_pave(rows, paved, item_pavement);
  }
  each_index(blocks, block_raise);
}
