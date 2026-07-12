import { text_combine } from "./text_combine.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { folder_current } from "./folder_current.mjs";
export function folder_current_join(result) {
  let s = text_slash_forward();
  let current = folder_current();
  let combined = text_combine(current, s);
  let value_string = text_combine(combined, result);
  return value_string;
}
