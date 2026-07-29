import { arguments_assert } from "./arguments_assert.mjs";
import { http_json } from "./http_json.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export async function http_json_memoized_on_success(fn, key, url) {
  arguments_assert(arguments, 3);
  ("Fetch a piece of json once and keep it, filed under the function that wanted it");
  ("and the key it wanted it by.");
  ("Kept only when the fetch worked. That is the part worth having in one place:");
  ("remembering a failure would turn one lost connection into a permanent absence");
  ("for as long as the page is open, where the whole reason for asking again is");
  ("that the network may simply have been down for a moment.");
  ("Nothing is what a caller is told when it could not be loaded, and the caller");
  ("decides what to do without it.");
  let cached = global_function_property_exists(fn, key);
  if (cached) {
    let already = global_function_property_get(fn, key);
    return already;
  }
  async function fetch_json() {
    let fetched = await http_json(url, {});
    return fetched;
  }
  let value = await catch_null_async(fetch_json);
  if (null_is(value)) {
    return null;
  }
  global_function_property_set(fn, key, value);
  return value;
}
