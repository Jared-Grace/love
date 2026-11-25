import { arguments_assert } from "./arguments_assert.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { http_json_browser_quiet } from "./http_json_browser_quiet.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export async function http_json_browser_quiet_memoized_on_success(
  fn,
  key,
  url,
) {
  arguments_assert(arguments, 3);
  ("Ask an address for JSON from a browser with nothing drawn over the page, once for as long as the page is open, filed under the function that wanted it and the key it wanted it by.");
  ("Kept only when the fetch worked, so a moment offline is asked about again on the next try rather than remembered as nothing for the rest of the visit. Nothing is what the caller is told when it could not be loaded.");
  ("★ A TAP THAT REPEATS SHOULD NOT REPEAT ITS DOWNLOAD. The Bible word card asked for the same files every time the same word - or any word in the same chapter - was tapped, and the files are served so that the browser keeps no copy of its own.");
  let cached = global_function_property_exists(fn, key);
  if (cached) {
    let already = global_function_property_get(fn, key);
    return already;
  }
  async function fetch_json() {
    let fetched = await http_json_browser_quiet(url);
    return fetched;
  }
  let value = await catch_null_async(fetch_json);
  if (null_is(value)) {
    return null;
  }
  global_function_property_set(fn, key, value);
  return value;
}
