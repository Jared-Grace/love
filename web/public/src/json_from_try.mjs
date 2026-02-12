import { string_skip_end } from "../../../love/public/src/string_skip_end.mjs";
import { text_skip } from "../../../love/public/src/text_skip.mjs";
import { text_index_of_last } from "../../../love/public/src/text_index_of_last.mjs";
import { text_index_of } from "../../../love/public/src/text_index_of.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
export function json_from_try(json) {
  let left = text_index_of(json, "{");
  let skipped = text_skip(json, left);
  let right = text_index_of_last(skipped, "}");
  const without = string_skip_end(skipped, right);
  let result = json_from(without);
  return result;
}
