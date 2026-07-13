import { text_index_of_assert_json } from "./text_index_of_assert_json.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
export function text_index_of(t, item) {
  let index = text_index_of_try(t, item);
  text_index_of_assert_json(t, index, item, {
    hint: "the search text should be found in t — is it actually present?",
  });
  return index;
}
