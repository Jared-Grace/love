import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
export function integer_to(integer_text) {
  let i = integer_to_try(integer_text);
  null_not_is_assert_json(i, {
    hint: "the text should parse as an integer — is it made only of digits?",
    integer_text,
  });
  return i;
}
