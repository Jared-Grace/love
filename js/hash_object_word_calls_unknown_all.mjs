import { arguments_assert } from "./arguments_assert.mjs";
import { hash_function_names } from "./hash_function_names.mjs";
import { js_hash_object_word_calls_unknown } from "./js_hash_object_word_calls_unknown.mjs";
import { key_literals_all_generic } from "./key_literals_all_generic.mjs";
export async function hash_object_word_calls_unknown_all() {
  "Every place in this repo that writes a word into the object a page address is read into, through a call the walk over addresses does not know how to read, as {files, sites}. Read-only.";
  "Which files are worth opening is asked next door, in the one place both readings of an address start from.";
  "The walking is the same walking, because this is the same shape of fault: something meant to be absent, where an empty answer only means anything if it is said how many files were opened to get it.";
  arguments_assert(arguments, 0);
  let candidates = await hash_function_names();
  let walked = await key_literals_all_generic(
    candidates,
    js_hash_object_word_calls_unknown,
  );
  return walked;
}
