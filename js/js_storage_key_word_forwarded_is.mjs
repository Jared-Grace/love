import { js_storage_key_word_forwarded_name_try } from "./js_storage_key_word_forwarded_name_try.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
export function js_storage_key_word_forwarded_is(ast, seams) {
  "Whether this file hands a storage seam a key word it was given rather than one it spells out. Read-only, pure.";
  "A word written out here, or spelled as a reference here, can be read here. A word that arrives as a plain variable cannot: what it holds was decided by whoever called this function, so the name being published is in their file, not this one. Saying so is what lets the reading go one step out and look there.";
  "A variable this file sets itself is not forwarded, whatever it ends up holding. It was decided here, so it is readable here - by the reading of written words where it was set from one, and by the reading of names where it was set from a call - and calling it forwarded says the word lives in the caller when it does not. That mistake is not idle: it makes a door of a function whose second thing is not a key word at all, and the reading then walks that function's callers taking their second argument as a published word. Two of them were numbers, and the size a reader had chosen their text at was on its way into a record of words on people's disks.";
  "Where the variable was set is asked of this file only, one step, the same as every reading around it. A name set from a name set from a name reads as coming from nowhere, and a name this file never sets reads as handed in - which is what a parameter is.";
  arguments_assert(arguments, 2);
  let variable = js_storage_key_word_forwarded_name_try(ast, seams);
  let named = not_equal(variable, null);
  if (not(named)) {
    return false;
  }
  let set_here = js_name_set_from_node_try(ast, variable);
  let own = not_equal(set_here, null);
  let forwarded = not(own);
  return forwarded;
}
