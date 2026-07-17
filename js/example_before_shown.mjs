import { text_empty_is } from "./text_empty_is.mjs";
export function example_before_shown(before) {
  if (text_empty_is(before)) {
    return "(nothing yet — new file)";
  }
  return before;
}
