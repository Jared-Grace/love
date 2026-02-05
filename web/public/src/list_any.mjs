import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_any(list, lambda$item) {
  let filtered = list_filter(list, lambda$item);
  let any = list_empty_not_is(filtered);
  return any;
}
