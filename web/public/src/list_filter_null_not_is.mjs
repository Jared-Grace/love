import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_null_not_is(mapped) {
  let filtered2 = list_filter(mapped, null_not_is);
  return filtered2;
}
