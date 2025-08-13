import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { error } from "./error.mjs";
import { list_size_1 } from "./list_size_1.mjs";
export function list_single(list) {
  if (!list_size_1(list)) {
    error();
  }
  return list_first(list);
}
