import { list_filter_ends_with_any } from "../../../love/public/src/list_filter_ends_with_any.mjs";
export function list_filter_ends_with(filtered2, f_name_suffix_after) {
  let filtered3 = list_filter_ends_with_any(filtered2, [f_name_suffix_after]);
  return filtered3;
}
