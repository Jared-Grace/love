import { list_get_or_null } from "./list_get_or_null.mjs";
export function list_first_try(list) {
  let index = 0;
  let first = list_get_or_null(list, index);
  return first;
}
