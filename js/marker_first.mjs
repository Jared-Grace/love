import { marker_first_index } from "./marker_first_index.mjs";
import { text_to } from "./text_to.mjs";
export function marker_first() {
  let index_value = marker_first_index();
  let index = text_to(index_value);
  return index;
}
