import { text_index_of_from_try } from "./text_index_of_from_try.mjs";
import { text_index_of_assert_json } from "./text_index_of_assert_json.mjs";
export function text_index_of_from(t, item, index_from) {
  let index = text_index_of_from_try(t, item, index_from);
  text_index_of_assert_json(t, index, item, {
    hint: "the search text should be found in t at or after index_from — is it present past that point?",
    index_from,
  });
  return index;
}
