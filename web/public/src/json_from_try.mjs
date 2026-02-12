import { json_starts_find_index } from "../../../love/public/src/json_starts_find_index.mjs";
import { text_slice_0 } from "../../../love/public/src/text_slice_0.mjs";
import { text_skip } from "../../../love/public/src/text_skip.mjs";
import { text_index_of_last } from "../../../love/public/src/text_index_of_last.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
export function json_from_try(json) {
  let left = json_starts_find_index(json);
  let skipped = text_skip(json, left);
  let right = text_index_of_last(skipped, "}");
  const without = text_slice_0(skipped, right + 1);
  let result = json_from(without);
  return result;
}
