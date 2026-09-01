import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export function app_shared_game_map_square_neighbours(x, y) {
  arguments_assert(arguments, 2);
  let east = {
    x: add(x, 1),
    y: y,
  };
  let west = {
    x: subtract(x, 1),
    y: y,
  };
  let south = {
    x: x,
    y: add(y, 1),
  };
  let north = {
    x: x,
    y: subtract(y, 1),
  };
  let around = [east, west, south, north];
  return around;
}
