import { digits_text } from "./digits_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_includes_curried_right_get } from "./text_includes_curried_right_get.mjs";
import { text_letters_is } from "./text_letters_is.mjs";
import { list_any } from "./list_any.mjs";
export function reply_character_kept(character) {
  "Whether one character of a message survives into what the reply rules read: a letter, a digit, or an apostrophe. Spaces, punctuation and emoji are all dropped.";
  let right = digits_text();
  let input = text_combine("'", right);
  let string_includes_curry_right = text_includes_curried_right_get(input);
  let choices = [text_letters_is, string_includes_curry_right];
  function test_passes(fn) {
    let v = fn(character);
    return v;
  }
  let any = list_any(choices, test_passes);
  return any;
}
