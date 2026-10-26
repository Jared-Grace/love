import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
export function app_code_value_itself_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("for a quiz asking the value of true or false written all by itself: it is already a value, with no question to ask, so it gives itself back; null for any other code");
  let t = js_keyword_true();
  let f = js_keyword_false();
  let words = [t, f];
  if (not_equal(question, answer) || not(words.includes(question))) {
    return null;
  }
  let parts = [
    "Remember: ",
    question,
    " is already a value, with no question to ask, so the code ",
    question,
    " gives ",
    answer,
    " back just as it is",
  ];
  return parts;
}
