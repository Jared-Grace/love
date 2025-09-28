import { data_path_generic } from "./data_path_generic.mjs";
export function data_path() {
  let inner = "";
  let f_path = data_path_generic(inner, "data");
  return f_path;
}
