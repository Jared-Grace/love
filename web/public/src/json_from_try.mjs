import { text_skip } from "../../../love/public/src/text_skip.mjs";
import { text_index_of_last } from "../../../love/public/src/text_index_of_last.mjs";
import { text_index_of } from "../../../love/public/src/text_index_of.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
export function json_from_try(json) {
  let index = text_index_of(json, "{");
  let skipped = text_skip(json, index);
  let i = text_index_of_last(skipped, "}");
  let result = json_from(removed2);
  return result;
}
