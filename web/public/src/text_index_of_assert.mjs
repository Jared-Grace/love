import { error_json } from "../../../love/public/src/error_json.mjs";
export function text_index_of_assert(t, index, search) {
  if (index <= -1) {
    error_json({
      t,
      search,
      index,
    });
  }
}
