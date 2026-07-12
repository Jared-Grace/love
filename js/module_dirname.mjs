import { fileURLToPath } from "url";
import { path_dirname } from "./path_dirname.mjs";
import { property_get } from "./property_get.mjs";
export async function module_dirname(meta) {
  let url = property_get(meta, "url");
  let __filename = fileURLToPath(url);
  let __dirname = await path_dirname(__filename);
  return __dirname;
}
