import { fileURLToPath } from "url";
import { path_dirname } from "./path_dirname.mjs";
export async function module_dirname(meta_url) {
  let __filename = fileURLToPath(meta_url);
  let __dirname = await path_dirname(__filename);
  return __dirname;
}
