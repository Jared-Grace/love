import { http_post_json_cache_clear } from "../../../love/public/src/http_post_json_cache_clear.mjs";
import { app_api_generic_url_body } from "../../../love/public/src/app_api_generic_url_body.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { app_api_cache_global_fn } from "../../../love/public/src/app_api_cache_global_fn.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function file_read(file_path) {
  marker("1");
  let fs = await import("fs");
  let contents = await fs.promises.readFile(file_path, "utf-8");
  return contents;
  if (browser_is()) {
    let r = await app_api_cache_global_fn(file_overwrite, arguments);
    var { url, body } = app_api_generic_url_body(file_read, args);
    http_post_json_cache_clear(url, body);
    return r;
  }
}
