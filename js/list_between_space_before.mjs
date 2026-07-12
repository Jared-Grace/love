import { list_add_first } from "./list_add_first.mjs";
import { list_between_space } from "./list_between_space.mjs";
export function list_between_space_before(list) {
  let combined = list_between_space(list);
  list_add_first(combined, " ");
  return combined;
}
