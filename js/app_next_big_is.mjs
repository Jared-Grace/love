import { app_next_big_hash_key } from "./app_next_big_hash_key.mjs";
import { property_exists } from "./property_exists.mjs";
export function app_next_big_is(hash) {
  "Whether a link asks for the large form of the passage page. The word being there at all is the asking, whatever follows it, so a person typing #big by hand gets what they meant.";
  let key = app_next_big_hash_key();
  let big = property_exists(hash, key);
  return big;
}
