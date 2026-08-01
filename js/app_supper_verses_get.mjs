import { firebase_storage_download_json_decompress_cache } from "./firebase_storage_download_json_decompress_cache.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { ebible_chapter_codes_browser } from "./ebible_chapter_codes_browser.mjs";
import { property_get } from "./property_get.mjs";
import { app_supper_verses_get_upload_destination } from "./app_supper_verses_get_upload_destination.mjs";
import { global_function_property_initialize_async } from "./global_function_property_initialize_async.mjs";
import { app_supper_verses_parse } from "./app_supper_verses_parse.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { browser_is } from "./browser_is.mjs";
export async function app_supper_verses_get(ebible_folder) {
  let b = browser_is();
  if (b) {
    async function get() {
      async function download() {
        let destination =
          app_supper_verses_get_upload_destination(ebible_folder);
        let project_url = firebase_storage_url_project_jg();
        let v2 = await firebase_storage_download_json_decompress_cache(
          project_url,
          destination,
        );
        return v2;
      }
      let v = await catch_null_async(download);
      let missing = null_is(v);
      if (missing) {
        let verses_inner = await app_supper_verses_parse(ebible_folder);
        let r = {
          verses: verses_inner,
        };
        return r;
      }
      return v;
    }
    let value = await global_function_property_initialize_async(
      ebible_chapter_codes_browser,
      ebible_folder,
      get,
    );
    let verses = property_get(value, "verses");
    return verses;
  }
  let list = await app_supper_verses_parse(ebible_folder);
  return list;
}
