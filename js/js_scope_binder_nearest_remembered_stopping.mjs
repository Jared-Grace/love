import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_scope_is } from "./js_scope_is.mjs";
import { js_scope_binding_names_remembered } from "./js_scope_binding_names_remembered.mjs";
import { set_includes } from "./set_includes.mjs";
export function js_scope_binder_nearest_remembered_stopping(
  stack,
  name,
  remembered,
) {
  arguments_assert(arguments, 3);
  ("The same answer as the twin without the suffix - which binding a mention of this name is reading - found by looking outwards from the mention and stopping at the first scope that binds it, rather than by asking every scope around it and keeping the innermost of the answers.");
  ("The chain runs from the outside in, so the innermost binder is the last of the matches. The twin gathers all of them and takes the last; this starts at the last and stops, which is the same choice made without asking the questions whose answers are then thrown away. Both pick the innermost position that binds, so they cannot differ: one takes the largest of the matching positions, the other meets it first.");
  ("What is skipped is the outer end of the chain, which is the costly end - those are the scopes that really do bind things, so each one asked there is a lookup of everything it binds. Measured over the repo's 13468 files: 427084 mentions asked, 4275373 scopes examined by the twin against 3232589 here, a quarter of the asking gone.");
  let index = list_size(stack);
  while (greater_than(index, 0)) {
    index = subtract(index, 1);
    let ancestor = stack[index];
    let scope_is = js_scope_is(ancestor);
    if (scope_is) {
      let bound = js_scope_binding_names_remembered(ancestor, remembered);
      let binds_name = set_includes(bound, name);
      if (binds_name) {
        return ancestor;
      }
    }
  }
  return null;
}
