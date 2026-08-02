import { arguments_assert } from "./arguments_assert.mjs";
import { js_literal_key_calls_set } from "./js_literal_key_calls_set.mjs";
import { js_literal_calls_set } from "./js_literal_calls_set.mjs";
import { add } from "./add.mjs";
export async function js_literal_calls_set_any(ast, literal, f_name) {
  arguments_assert(arguments, 3);
  ("Points every place in one file that spells a written word at the function that");
  ("hands that word back, under both readings of where a call may stand, and");
  ("answers how many places there were altogether.");
  ("The two readings are opposites by design, and each one refuses a file the other");
  ("one handles. That is right when a reader has looked at the file and knows which");
  ("kind of site is in it. It is wrong when the word is one field name spelled");
  ("across sixty files, because there the answer differs file by file for no reason");
  ("the caller can see: naming a field is one reading and handing the word to a");
  ("function that takes a field name is the other, and the same word does both in");
  ("the same file. Asking the caller to sort sixty files into two lists by opening");
  ("each one is asking them to compute what this computes.");
  ("The naming of a field goes first, because the other reading skips exactly those");
  ("places and would otherwise have to be re-read afterwards to find them gone.");
  let keyed = js_literal_key_calls_set(ast, literal, f_name);
  let rest = await js_literal_calls_set(ast, literal, f_name);
  let changed = add(keyed, rest);
  return changed;
}
