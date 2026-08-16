import { text_prefix_without_inner } from "./text_prefix_without_inner.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_name_lambda } from "./js_name_lambda.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { not } from "./not.mjs";
export function js_name_lambda_is(name) {
  arguments_assert(arguments, 1);
  ("True when this is a name a pass handed out to a function that was written without one, rather than a name somebody chose.");
  ("The pass names them all the same word and puts a number on the end when that word is already taken in the file, so the whole set is that word alone and that word with digits after it. Anything else is somebody's own choice of name, however short.");
  ("Worth telling apart because a name that was handed out says nothing about the function under it. Carried out to stand on its own it becomes a name in the repo that no search for what a function does will ever reach, and the repo asks a name to be its parts joined.");
  let word = js_name_lambda();
  let bare_is = equal(name, word);
  if (bare_is) {
    return true;
  }
  let starts_is = text_starts_with(name, word);
  if (not(starts_is)) {
    return false;
  }
  let after = text_prefix_without_inner(name, word);
  let numbered_is = text_digits_is(after);
  return numbered_is;
}
