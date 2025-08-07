import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { error } from "./error.mjs";
export function list_single(list) {
  if (list_empty_is(list)) {
    error();
  }
  return list_first(list);
}
