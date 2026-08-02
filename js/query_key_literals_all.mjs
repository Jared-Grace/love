import { arguments_assert } from "./arguments_assert.mjs";
import { query_function_names } from "./query_function_names.mjs";
import { key_literals_all_generic } from "./key_literals_all_generic.mjs";
import { js_query_key_literals } from "./js_query_key_literals.mjs";
export async function query_key_literals_all() {
  "Every place in this repo that writes a word straight into the query part of a page address, as {files, sites} - how many files were opened, and what was found in them. Read-only.";
  "All that is said here is which part of the address is meant - which files, and which reading. The walking is shared with the part after the hash, which opens the same trees the same way.";
  arguments_assert(arguments, 0);
  let candidates = await query_function_names();
  let walked = await key_literals_all_generic(candidates, js_query_key_literals);
  return walked;
}
