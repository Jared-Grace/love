import { js_storage_key_word_forwarded_name_try } from "./js_storage_key_word_forwarded_name_try.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
export function js_storage_key_word_forwarded_is(ast, seams) {
  "Whether this file hands a storage seam a key word it was given rather than one it spells out. Read-only, pure.";
  "A word written out here, or spelled as a reference here, can be read here. A word that arrives as a plain variable cannot: what it holds was decided by whoever called this function, so the name being published is in their file, not this one. Saying so is what lets the reading go one step out and look there.";
  "A variable is taken as forwarded without asking where it came from. Some of them hold a word worked out on the spot rather than one handed in, and treating those as forwarded only means the callers are read too - and what a caller writes there is dropped unless it answers to a real function. Guessing the other way would lose a published name, and that is the loss with no way back.";
  arguments_assert(arguments, 2);
  let variable = js_storage_key_word_forwarded_name_try(ast, seams);
  let forwarded = not_equal(variable, null);
  return forwarded;
}
