import { error_json } from "../../../love/public/src/error_json.mjs";
export function text_index_of_assert(index, s, item) {
  if (index <= -1) {
    error_json({
      s,
      item,
      index,
    });
  }
}
