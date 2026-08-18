import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { each_range_from } from "./each_range_from.mjs";
import { list_adder } from "./list_adder.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { bless_cone_holds } from "./bless_cone_holds.mjs";
export function bless_cone_tiles(cone) {
  arguments_assert(arguments, 1);
  ("Every tile the player can see, listed - the same answer bless_cone_holds gives one tile");
  ("at a time, asked of all of them at once.");
  ("A drawing needs the list, because it has to put something on each of those tiles; the");
  ("brain only ever needed the predicate. Rather than write the cone's shape out a second");
  ("time in list form, this walks the square the cone must fit inside and keeps what the");
  ("predicate keeps. So there is still exactly ONE rule for what can be seen, and a wash on");
  ("the screen cannot come to disagree with the count of who was blessed.");
  ("The square is the depth either side, which is the furthest a cone can reach in any");
  ("direction, so nothing the predicate would hold is left outside it.");
  let x = property_get(cone, "x");
  let y = property_get(cone, "y");
  let depth = property_get(cone, "depth");
  let west = subtract(x, depth);
  let east = add(x, depth);
  let north = subtract(y, depth);
  let south = add(y, depth);
  function lambda(add_tile) {
    function lambda$y(tile_y) {
      function lambda$x(tile_x) {
        let held = bless_cone_holds(cone, tile_x, tile_y);
        if (held) {
          add_tile({
            x: tile_x,
            y: tile_y,
          });
        }
      }
      each_range_from(west, east, lambda$x);
    }
    each_range_from(north, south, lambda$y);
  }
  let tiles = list_adder(lambda);
  return tiles;
}
