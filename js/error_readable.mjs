import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_from } from "./text_from.mjs";
export function error_readable(e) {
  arguments_assert(arguments, 1);
  ("what went wrong, as something that survives being written down");
  ("an error carries its words on properties that are deliberately not walked when it is turned into json, so writing one down straight gives an empty pair of brackets - every word of why lost at the one moment somebody is reading to find out why. Measured on the retrier: three failed attempts reported as three empty brackets.");
  ("anything at all can be thrown, and a thing thrown that is not an error has no words to take. Then what it prints as is the best that can be said about it, and saying that is still better than saying nothing.");
  let words = e && e.message;
  let missing = text_empty_is(words);
  if (missing) {
    let printed = text_from(e);
    return printed;
  }
  return words;
}
