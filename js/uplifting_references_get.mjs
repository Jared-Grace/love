import { http_json } from "./http_json.mjs";
import { uplifting_references_url } from "./uplifting_references_url.mjs";
import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { null_is } from "./null_is.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export async function uplifting_references_get() {
  "fetch the list of uplifting verse references from firebase (memoized, caching only on success so a transient failure retries). Returns null when it cannot be loaded — the caller decides what to do offline.";
  let key = "references";
  let cached = global_function_property_exists(uplifting_references_get, key);
  if (cached) {
    return global_function_property_get(uplifting_references_get, key);
  }
  let url = uplifting_references_url();
  async function fetch_references() {
    let list = await http_json(url, {});
    return list;
  }
  let references = await catch_ignore_async(fetch_references);
  if (null_is(references)) {
    return null;
  }
  global_function_property_set(uplifting_references_get, key, references);
  return references;
}
