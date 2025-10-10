import { data_path_generic } from "../../../love/public/src/data_path_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function data_aliases_path() {
  marker("1");
  let f_path = data_path_generic("", "aliases");
  return f_path;
}
