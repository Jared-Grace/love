import { data_path_generic } from "./data_path_generic.mjs";
export function data_aliases_path() {
  "Where the record of short names for functions is kept, named once here so no caller has to spell the path.";
  let f_path = data_path_generic("", "aliases");
  return f_path;
}
