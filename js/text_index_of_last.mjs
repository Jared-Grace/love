import { text_index_of_assert_json } from "./text_index_of_assert_json.mjs";
import { text_index_of_last_try } from "./text_index_of_last_try.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function text_index_of_last(t, search) {
  arguments_assert(arguments, 2);
  let index = text_index_of_last_try(t, search);
  text_index_of_assert_json(t, index, search, {
    hint: "the search text should be found in t — is it actually present?",
  });
  return index;
}
