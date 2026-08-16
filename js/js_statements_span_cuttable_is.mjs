import { and } from "./and.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_escapes_unmatched } from "./js_statements_escapes_unmatched.mjs";
import { js_statements_outer_assign_names } from "./js_statements_outer_assign_names.mjs";
import { js_statements_span_outputs_written_names } from "./js_statements_span_outputs_written_names.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_empty_is_multiple } from "./list_empty_is_multiple.mjs";
export function js_statements_span_cuttable_is(statements, tail) {
  arguments_assert(arguments, 2);
  (
    "Whether a run of lines could be pulled out into a function of its own without any of the silent wrongs, asked without being stopped by the answer."
  );
  (
    "The cut refuses on exactly these three readings, so a run this lets through is a run the cut will take. All three refusals live next door with the reasons written out: a jump that leaves the run has nowhere to land, a name the run writes to but did not bring into being would be written on a copy, and a name the run hands back that is written to again would become two names spelled the same way."
  );
  (
    "The lines behind the run are asked for as well as the run, because the third reading cannot be made from the run alone - what a run hands back is decided by what the lines behind it still read. The first two need only the run, and are none the worse for being asked beside one that needs more."
  );
  (
    "Only the silent wrongs are asked about. Whether the run is worth cutting - how long it is, how much it would be handed, what it would hand back - is a different question and belongs to whatever is choosing, not here."
  );
  let escapes = js_statements_escapes_unmatched(statements);
  let carried = js_statements_outer_assign_names(statements);
  let split = js_statements_span_outputs_written_names(statements, tail);
  let cuttable = list_empty_is_multiple([escapes, carried, split]);
  return cuttable;
}
