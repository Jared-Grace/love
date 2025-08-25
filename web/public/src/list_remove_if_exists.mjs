import {list_remove} from "./list_remove.mjs";
import {list_includes} from "./list_includes.mjs";
export function list_remove_if_exists(f_names, f_name_before) {
  let includes = list_includes(f_names, f_name_before);
  if (includes) {
    list_remove(f_names, f_name_before);
  }
}
