import { text_combine_3 } from "./text_combine_3.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { folder_current } from "./folder_current.mjs";
export function folder_current_join(result) {
  let s = text_slash_forward();
  let current = folder_current();
  let value_string = text_combine_3(current, s, result);
  return value_string;
}
