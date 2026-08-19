import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
export function bless_tiles_rectangle(x, y, width, height) {
  arguments_assert(arguments, 4);
  ("A solid block of tiles, given as the tiles it covers - that many across and that many");
  ("down, beginning at the tile named and going east and south from it.");
  ("The sibling of a straight run of tiles, and between them they are every shape this game");
  ("has needed so far. A place here is only ever the tiles it covers, so a building, a");
  ("pavement and a street differ in their SHAPE and in nothing else - which is why neither");
  ("of these knows what it is being used to build.");
  let downs = range(height);
  function row_tiles(down) {
    let acrosses = range(width);
    function tile_at(across) {
      let tile = {
        x: add(x, across),
        y: add(y, down),
      };
      return tile;
    }
    let tiles_row = list_map(acrosses, tile_at);
    return tiles_row;
  }
  let rows = list_map(downs, row_tiles);
  let tiles = list_flat(rows);
  return tiles;
}
