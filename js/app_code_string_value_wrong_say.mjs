import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_to } from "./text_to.mjs";
import { js_tokenizer_normalized } from "./js_tokenizer_normalized.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_string_quote } from "./js_string_quote.mjs";
import { text_size } from "./text_size.mjs";
import { equal } from "./equal.mjs";
import { text_slice } from "./text_slice.mjs";
export function app_code_string_value_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong value for a string standing alone: the quote marks only show where the string starts and ends, so its value is what is between them, spaces and all, as parts that take turns between words and code. null for anything but one string in double quotes whose inside is the right answer");
  ("Not picked: a word about the other words offered; the picks are other strings or the same one with its quote marks kept, and what is between the marks answers both");
  let message = text_to(question);
  let code = text_trim(message);
  let right = text_to(answer);
  function tokens_get() {
    let tokens = js_tokenizer_normalized(code);
    return tokens;
  }
  let tokens = catch_null(tokens_get);
  if (null_is(tokens) || not(list_size_1(tokens))) {
    return null;
  }
  let quote = js_string_quote();
  let size = text_size(code);
  let left = text_slice(code, 0, 1);
  let b = equal(left, quote);
  if (not(b) || not(equal(text_slice(code, subtract(size, 1), size), quote))) {
    return null;
  }
  let to = subtract(size, 1);
  let inside = text_slice(code, 1, to);
  let b2 = equal(inside, right);
  if (not(b2)) {
    return null;
  }
  let parts = [
    "Remember: the quote marks ",
    quote,
    " only show where a string starts and ends, so the value of ",
    code,
    " is what is between them: ",
    inside,
    "",
  ];
  return parts;
}
