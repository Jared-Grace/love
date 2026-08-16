import { arguments_assert } from "./arguments_assert.mjs";
import { js_assigned_names } from "./js_assigned_names.mjs";
import { js_statements_declared_names } from "./js_statements_declared_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
export function js_statements_outer_assign_names(statements) {
  arguments_assert(arguments, 1);
  ("The names a run of lines gives a new value to without having brought them into being itself, which is empty for a run that may be cut out.");
  ("The reading under the refusal next door. Why such a name cannot travel, and why every one of them is refused rather than only the ones that turn out to matter, is written there and not repeated here.");
  ("It is read out on its own so that something may ask the question without being stopped by the answer. A refusal is right at the moment of cutting and wrong at the moment of looking, because a proposer has to weigh the runs that cannot be cut in order to leave them out of what it offers.");
  let born = js_statements_declared_names(statements);
  let written = list_map_concat_multiple(statements, js_assigned_names);
  let carried = list_difference(written, born);
  return carried;
}
