import { arguments_assert } from "./arguments_assert.mjs";
import { js_scope_binding_names } from "./js_scope_binding_names.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
export function js_scope_binding_names_remembered(node, remembered) {
  arguments_assert(arguments, 2);
  ("The names one scope binds, worked out once for that scope and kept in the lookup handed in, so the next mention standing inside it reads the answer instead of working it out again.");
  ("What a scope binds does not change while a tree is only being read, and the readers that ask are asking about every mention in a file - so the same handful of scopes are asked over and over. Measured 2026-08-14 across this repo, the sweep for names nothing binds asked this question seven hundred and eighty-seven thousand times about thirty-nine thousand scopes: twenty askings of every scope for one answer.");
  ("The answer is kept as a lookup rather than as a list, because the only thing anybody does with it is ask whether one name is in it, and a list answers that by reading itself to the end.");
  ("It is remembered for as long as the caller holds the lookup and no longer. A tree being edited binds different names afterwards, so a memory living past one reading would answer about the tree as it used to be - which is why the remembering belongs to whoever is doing the reading rather than to this name.");
  let known = remembered.get(node);
  if (known) {
    return known;
  }
  let names = js_scope_binding_names(node);
  let bound = list_unique_set(names);
  remembered.set(node, bound);
  return bound;
}
