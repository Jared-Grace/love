import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { list_get } from "./list_get.mjs";
import { bless_blessed_building_tiles } from "./bless_blessed_building_tiles.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function bless_blessed_tiles(blessed, blocks) {
  arguments_assert(arguments, 2);
  ("Every square of ground in the world that has been prayed for - across every block, every");
  ("building on it, and every household finished inside one.");
  ("Worked out fresh from the record rather than remembered, for the same reason the marks");
  ("over people's heads are: a prayer said over a whole block covered every house standing");
  ("on it, and nobody should have to go back afterwards and write each one of them down.");
  ("A building's number counts from the beginning of the world, while a block knows only the");
  ("few buildings standing on it. So the numbers are asked for by the block's own index and");
  ("read off in the order the buildings were raised - and that order is the order they were");
  ("addressed in, which is the same fact that puts a resident at their own front door.");
  function block_tiles(block, index) {
    let buildings = property_get(block, "buildings");
    let numbers = bless_place_members("block", index);
    function building_tiles(building, at) {
      let number = list_get(numbers, at);
      let lit = bless_blessed_building_tiles(blessed, building, number);
      return lit;
    }
    let per_building = list_map_index(buildings, building_tiles);
    let tiles_here = list_concat_multiple(per_building);
    return tiles_here;
  }
  let per_block = list_map_index(blocks, block_tiles);
  let tiles = list_concat_multiple(per_block);
  return tiles;
}
