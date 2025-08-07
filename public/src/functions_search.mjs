import {list_filter} from './list_filter.mjs';
import {functions_names} from './functions_names.mjs';
export function functions_search(search) {
  let f_names = functions_names();
  return list_filter(f_names, n=>string_includes(n,search));
}
