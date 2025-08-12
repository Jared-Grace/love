import { marker_first_index } from "./marker_first_index.mjs";
import { string_to } from "./string_to.mjs";
export function marker_first() {
  let s = marker_first_index();
  return string_to(s);
}
