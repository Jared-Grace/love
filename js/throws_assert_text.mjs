import { text_to } from "./text_to.mjs";
import { throws_assert_json } from "./throws_assert_json.mjs";
export function throws_assert_text(lambda) {
  let e = throws_assert_json(lambda, {
    hint: "the lambda was expected to throw so its error text could be read — but it returned normally",
  });
  let input = text_to(e);
  return input;
}
