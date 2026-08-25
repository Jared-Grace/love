import { file_url_path } from "./file_url_path.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { property_get } from "./property_get.mjs";
export async function module_dirname(meta) {
  let url = property_get(meta, "url");
  let __filename = file_url_path(url);
  let __dirname = await path_dirname(__filename);
  return __dirname;
}
