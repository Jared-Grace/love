import { list_get_or_null } from "../../../love/public/src/list_get_or_null.mjs";
import { undefined_is_if_null } from "../../../love/public/src/undefined_is_if_null.mjs";
export function list_first_try(list) {
  const index = 0;
  let first = list_get_or_null(list, index);
  first = undefined_is_if_null(first);
  return first;
}
