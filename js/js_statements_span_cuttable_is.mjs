import { and } from "./and.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_escapes_unmatched } from "./js_statements_escapes_unmatched.mjs";
import { js_statements_outer_assign_names } from "./js_statements_outer_assign_names.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function js_statements_span_cuttable_is(statements) {
  arguments_assert(arguments, 1);
  ("Whether a run of lines could be pulled out into a function of its own without the two silent wrongs, asked without being stopped by the answer.");
  ("The cut refuses on exactly these two readings, so a run this lets through is a run the cut will take. Both refusals live next door with the reasons written out: a jump that leaves the run has nowhere to land, and a name the run writes to but did not bring into being would be written on a copy.");
  ("Only the two silent wrongs are asked about. Whether the run is worth cutting - how long it is, how much it would be handed, what it would hand back - is a different question and belongs to whatever is choosing, not here.");
  let escapes = js_statements_escapes_unmatched(statements);
  let jumps_none = list_empty_is(escapes);
  let carried = js_statements_outer_assign_names(statements);
  let writes_none = list_empty_is(carried);
  let cuttable = and(jumps_none, writes_none);
  return cuttable;
}
