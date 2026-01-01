import { string_index_of_try } from "../../../love/public/src/string_index_of_try.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
export function string_index_of(s, item) {
  marker("1");
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
