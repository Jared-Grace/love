import { list_get_or } from "../../../love/public/src/list_get_or.mjs";
export function list_get_or_null(list, index) {
  let value = list_get_or(list, index, null);
  return value;
}
