import {error} from "./error.mjs";
import {list_size_1} from "./list_size_1.mjs";
export function list_size_1_assert(list) {
  if (!list_size_1(list)) {
    error();
  }
}
