import { arguments_assert } from "./arguments_assert.mjs";
import { query_function_names } from "./query_function_names.mjs";
import { key_getters_all_generic } from "./key_getters_all_generic.mjs";
import { js_query_key_getters } from "./js_query_key_getters.mjs";
export async function query_key_getters_all() {
  "Every function called to get the name of a field of the query part of a page address, as {f_name, getter} - the file doing the calling and the function it calls. Read-only.";
  "This is the repaired shape rather than the broken one, so the answer is the whole set and not a list of things wrong. Whether each one is safe is a further question, asked where the answer lives.";
  "All that is said here is which part of the address is meant - which files, and which reading. The walking is shared with the part after the hash, which opens the same trees the same way.";
  arguments_assert(arguments, 0);
  let candidates = await query_function_names();
  let pairs = await key_getters_all_generic(candidates, js_query_key_getters);
  return pairs;
}
