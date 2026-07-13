import { error_json } from "./error_json.mjs";
export function text_index_of_assert_json(t, index, search, json) {
  if (index <= -1) {
    error_json({
      t,
      search,
      index,
      json,
    });
  }
}
