import { arguments_assert } from "./arguments_assert.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { property_set } from "./property_set.mjs";
export function js_statement_names_bound_note(bound_at, statement, index) {
  arguments_assert(arguments, 3);
  ("Notes, for every name this line brings into being, that this is the line that gave it its value.");
  ("A later line naming one of them is reading this line's work, and that is the only way a walk over a body can tell reading-what-came-before apart from reading something the body was handed.");
  ("A name given a value twice keeps only the later line, because a reader arriving below the second one is holding the second one's value. The first is spent by then and costs them nothing.");
  let bound = js_declared_names(statement);
  for (let name of bound) {
    property_set(bound_at, name, index);
  }
}
