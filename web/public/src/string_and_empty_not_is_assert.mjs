import { string_empty_not_is_assert } from "../../../love/public/src/string_empty_not_is_assert.mjs";
import { string_is_assert } from "../../../love/public/src/string_is_assert.mjs";
export function string_and_empty_not_is_assert(name) {
  string_is_assert(name);
  string_empty_not_is_assert(name);
}
