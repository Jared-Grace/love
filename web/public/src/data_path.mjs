import { data_folder } from "../../../love/public/src/data_folder.mjs";
import { data_path_generic } from "../../../love/public/src/data_path_generic.mjs";
export function data_path() {
  let inner = "";
  let d_path = data_path_generic(inner, "data");
  return d_path;
  const folder = data_folder();
}
