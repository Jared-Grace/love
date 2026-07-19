import { http_json } from "./http_json.mjs";
import { uplifting_package_url } from "./uplifting_package_url.mjs";
import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { null_is } from "./null_is.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export async function uplifting_package_get(bible_folder) {
  let cached = global_function_property_exists(
    uplifting_package_get,
    bible_folder,
  );
  if (cached) {
    return global_function_property_get(uplifting_package_get, bible_folder);
  }
  let url = uplifting_package_url(bible_folder);
  async function fetch_package() {
    let map = await http_json(url, {});
    return map;
  }
  let package_map = await catch_ignore_async(fetch_package);
  if (null_is(package_map)) {
    return null;
  }
  global_function_property_set(uplifting_package_get, bible_folder, package_map);
  return package_map;
}
