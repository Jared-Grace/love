import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
export function app_shared_game_map_square_key(x, y, width) {
  arguments_assert(arguments, 3);
  let left = multiply(y, width);
  let key = add(left, x);
  return key;
}
