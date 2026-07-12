import { list_starts_with } from "./list_starts_with.mjs";
export function list_starts_with_curried_right(list_prefix) {
  let c = function list_starts_with_curried_right_result(list) {
    return list_starts_with(list, list_prefix);
  };
  return c;
}
