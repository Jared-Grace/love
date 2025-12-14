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
