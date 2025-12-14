import { app_api_generic_url_body } from "../../../love/public/src/app_api_generic_url_body.mjs";
import { http_post_json_cache_clear } from "../../../love/public/src/http_post_json_cache_clear.mjs";
import { app_api_cache_global_fn } from "../../../love/public/src/app_api_cache_global_fn.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
export async function file_overwrite(file_path, contents) {
  if (browser_is()) {
    let r = await app_api_cache_global_fn(file_overwrite, arguments);
    var { url, body } = app_api_generic_url_body(f_name, args);
    http_post_json_cache_clear(url, body);
    return r;
  }
  await file_parent_exists_ensure(file_path);
  let fs = await import("fs");
  await fs.promises.writeFile(file_path, contents, "utf-8");
  return;
}
