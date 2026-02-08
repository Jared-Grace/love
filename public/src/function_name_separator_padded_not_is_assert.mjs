import { text_padded_not_is_assert } from "../../../love/public/src/text_padded_not_is_assert.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
export function function_name_separator_padded_not_is_assert(suffix) {
  let padding = function_name_separator();
  text_padded_not_is_assert(suffix, padding);
}
