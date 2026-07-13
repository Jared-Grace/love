import { integer_base_2_from_try } from "./integer_base_2_from_try.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
export function integer_base_2_from(integer_text) {
  let i = integer_base_2_from_try(integer_text);
  null_not_is_assert_json(i, {
    hint: "the text should parse as a base-2 integer — is it made only of binary digits?",
    integer_text,
  });
  return i;
}
