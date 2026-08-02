import { hash_function_names } from "./hash_function_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_hash_key_literals } from "./js_hash_key_literals.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export async function hash_key_literals_all() {
  "Every place in this repo that writes a word straight into the address of a page. Read-only.";
  "Which files are worth opening is asked next door, where the reason it is not a shortcut is written down once for both readings.";
  "All that is said here is which part of the address is meant - which files, and which reading. The walking is shared with the part after the question mark, which opens the same trees the same way.";
  arguments_assert(arguments, 0);
  let candidates = await hash_function_names();
  let sites = await key_literals_all_generic(candidates, js_hash_key_literals);
  return sites;
}
