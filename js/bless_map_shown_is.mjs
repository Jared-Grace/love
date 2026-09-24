import { arguments_assert } from "./arguments_assert.mjs";
import { bless_hash_map } from "./bless_hash_map.mjs";
import { bless_dev_opening_is } from "./bless_dev_opening_is.mjs";
export function bless_map_shown_is() {
  arguments_assert(arguments, 0);
  ("Whether this visit shows the whole world at once - the dev opening that asked for the map.");
  let word = bless_hash_map();
  let overview = bless_dev_opening_is([word]);
  return overview;
}
