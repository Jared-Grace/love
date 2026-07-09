import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { list_between_space } from "../../../love/public/src/list_between_space.mjs";
export function list_between_space_before(parts) {
  let combined = list_between_space(parts);
  list_add_first(combined, " ");
  return combined;
}
