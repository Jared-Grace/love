import { arguments_assert } from "./arguments_assert.mjs";
import { js_tokenizer_normalized } from "./js_tokenizer_normalized.mjs";
import { catch_null } from "./catch_null.mjs";
export function js_tokenizer_normalized_or_null(code) {
  arguments_assert(arguments, 1);
  ("the tokens of code, or null when it is not code that can be cut into tokens");
  function get() {
    let tokens = js_tokenizer_normalized(code);
    return tokens;
  }
  let tokens = catch_null(get);
  return tokens;
}
