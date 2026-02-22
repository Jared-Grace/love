import { text_slash_forward } from "../../../love/public/src/text_slash_forward.mjs";
import { folder_current } from "../../../love/public/src/folder_current.mjs";
export function folder_current_join(result) {
  let s = text_slash_forward();
  let current = folder_current();
  let value_string = current + s + result;
  return value_string;
}
