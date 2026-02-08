import { string_index_of_try } from "../../../love/public/src/string_index_of_try.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
export function text_index_of(s, item) {
  let index = string_index_of_try(s, item);
  if (index <= -1) {
    error_json({
      s,
      item,
      index,
    });
  }
  return index;
}
