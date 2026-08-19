import { key_getters_all_generic } from "./key_getters_all_generic.mjs";
import { hash_function_names } from "./hash_function_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_hash_key_getters_own } from "./js_hash_key_getters_own.mjs";
export async function hash_key_getters_own_all() {
  "Every function called to get the name of a field of the address of the page doing the calling, as {f_name, getter} - the file doing the calling and the function it calls. Read-only.";
  "The twin of the whole set next door, and the difference is one kind of address. A link built here to be opened somewhere else is left out, because its words belong to the page it opens: that page reads them back, that page can get them wrong, and that page is the one that has to be able to say so.";
  "This is the set to ask when the question is whether a page answers for its own link. Asked of the whole set instead, a page that merely links to another one is reported as reading words it never looks at, and the only ways out are to leave a true complaint standing or to have the page declare it understands an address it never opens.";
  "Freezing wants the other one, and gets it: nothing here narrows that reading, so a word published in an outgoing link is watched exactly as it was.";
  arguments_assert(arguments, 0);
  let candidates = await hash_function_names();
  let pairs = await key_getters_all_generic(
    candidates,
    js_hash_key_getters_own,
  );
  return pairs;
}
