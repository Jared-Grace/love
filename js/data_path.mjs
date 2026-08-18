import { data_folder } from "./data_folder.mjs";
import { data_path_generic } from "./data_path_generic.mjs";
export function data_path() {
  "Where the data folder itself sits - the root the per-file paths under it are all built from.";
  let inner = "";
  let folder = data_folder();
  let d_path = data_path_generic(inner, folder);
  return d_path;
}
