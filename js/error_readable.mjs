import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_to } from "./text_to.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { or } from "./or.mjs";
export function error_readable(e) {
  arguments_assert(arguments, 1);
  ("what went wrong, said in a way that survives being written down");
  ("an error keeps its words on properties that are deliberately not walked when it is turned into json, so writing one down straight gives an empty pair of brackets - every word of why, lost at the one moment somebody is reading to find out why. Measured on the retrier: three failed attempts reported as three empty brackets, which reads exactly like three attempts that had nothing to say.");
  ("anything at all can be thrown, and a thrown thing that is not an error carries no words to take. Then how it prints is the best that can be said about it, and saying that is still more than saying nothing.");
  ("a thrown nothing is the one case with neither words nor a printable form, and it gets a sentence of its own rather than an exception - a reader arrives here because something already went wrong, so this is the last place that should add a second failure on top of the first.");
  let words = property_get_or_null(e, "message");
  let told = null_not_is(words);
  if (told) {
    return words;
  }
  let empty = null_is(e);
  let absent = undefined_is(e);
  let nothing = or(empty, absent);
  if (nothing) {
    let r = "nothing was thrown that could say what went wrong";
    return r;
  }
  let printed = text_to(e);
  return printed;
}
