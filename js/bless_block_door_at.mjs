import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
export function bless_block_door_at(r, x) {
  arguments_assert(arguments, 2);
  let sidewalk_y = property_get(r, "sidewalk_y");
  let block_width = property_get(r, "block_width");
  let sidewalk_depth = property_get(r, "sidewalk_depth");
  let alleys = property_path_get_2(r, "r2", "alleys");
  let sidewalk = bless_tiles_rectangle(
    x,
    sidewalk_y,
    block_width,
    sidewalk_depth,
  );
  function door_at(building) {
    let at = property_path_get_2(building, "doorway", "x");
    let door = {
      x: at,
      y: sidewalk_y,
    };
    return door;
  }
  let r3 = {
    alleys,
    sidewalk,
    door_at,
  };
  return r3;
}
