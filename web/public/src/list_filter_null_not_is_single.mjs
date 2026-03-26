import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_filter_null_not_is } from "../../../love/public/src/list_filter_null_not_is.mjs";
export function list_filter_null_not_is_single(mapped) {
  let filtered = list_filter_null_not_is(mapped);
  let f_name_after = list_single(filtered);
  return f_name_after;
}
