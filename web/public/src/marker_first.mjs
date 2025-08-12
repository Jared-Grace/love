import { marker_first_index } from "./marker_first_index.mjs";
import { string_to } from "./string_to.mjs";
export function marker_first() {
  let index_value = marker_first_index();
  let index = string_to(index_value);
  return index;
}
