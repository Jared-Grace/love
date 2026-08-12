import { arguments_assert } from "./arguments_assert.mjs";
import { property_list_map } from "./property_list_map.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export function js_block_callee_names(block) {
  arguments_assert(arguments, 1);
  ("The names of the functions called by one run of statements, in the order they are written - one name for each statement that binds a plain name to a plain call, and nothing at all for the rest.");
  ("A statement giving nothing away is left out rather than kept as an absence, because every reader of this counts what it finds and an absence counted is a value that was never called.");
  ("The order is kept because a run is written in one, even where the reader that follows only counts. Keeping it costs nothing and a reader wanting it later would otherwise have to come back here for it.");
  let sigs = property_list_map(block, "body", js_atomic_statement_signature);
  let names = [];
  for (let sig of sigs) {
    let callee = property_get(sig, "callee");
    let none = null_is(callee);
    if (none) {
      continue;
    }
    list_add(names, callee);
  }
  return names;
}
