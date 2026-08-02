import { key_getters_all_generic } from "./key_getters_all_generic.mjs";
import { hash_function_names } from "./hash_function_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_hash_key_getters } from "./js_hash_key_getters.mjs";
export async function hash_key_getters_all() {
  "Every function called to get the name of a field of a page address, as {f_name, getter} - the file doing the calling and the function it calls. Read-only.";
  "This is the repaired shape rather than the broken one, so the answer is the whole set and not a list of things wrong. Whether each one is safe is a further question with a further answer, and it is asked where the answer lives.";
  "The whole set is what comes back so that a walk which has stopped reaching anything can be told from a repo in order. Both of these readings pass by finding nothing, and finding nothing is also what a walk that broke does.";
  "The pair is the answer rather than the name alone, so anything asking further can say where to look.";
  "Which files are worth opening is asked next door, because the other reading of page addresses narrows its walk exactly the same way and the two had to agree by hand about the word to look for.";
  "All that is said here is which part of the address is meant - which files, and which reading. The walking is shared with the part after the question mark, which opens the same trees the same way.";
  arguments_assert(arguments, 0);
  let candidates = await hash_function_names();
  let pairs = await key_getters_all_generic(candidates, js_hash_key_getters);
  return pairs;
}
