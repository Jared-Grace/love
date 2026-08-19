import { js_statements_span_made_below_names } from "./js_statements_span_made_below_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_escapes_unmatched } from "./js_statements_escapes_unmatched.mjs";
import { js_statements_outer_assign_names } from "./js_statements_outer_assign_names.mjs";
import { js_statements_span_outputs_closure_names } from "./js_statements_span_outputs_closure_names.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function js_statements_span_cuttable_is(statements, tail) {
  arguments_assert(arguments, 2);
  ("Whether a run of lines could be pulled out into a function of its own without any of the silent wrongs, asked without being stopped by the answer.");
  ("The cut refuses on exactly these four readings, so a run this lets through is a run the cut will take. All four refusals live next door with the reasons written out: a jump that leaves the run has nowhere to land, a name the run writes to but did not bring into being would be written on a copy, a name a function inside the run holds would become two names spelled the same way once the lines behind write to it, and a name the run reads that only the lines below it bring into being would be handed over before anything had filled it.");
  ("The last of the four was missing here until 2026-08-19, and what that cost is the reason for saying out loud that the two sides must ask the same questions. The cut asked it and this did not, so a run neither could take was offered as one that could, and taking it stopped a sweep of the whole repo on its first function with everything after it unread. A reading that promises a cut will go through has to be wrong in only one direction: it may hold a good run back, and it may never wave a bad one on.");
  ("The lines behind the run are asked for as well as the run, because two of the readings cannot be made from the run alone - what a run hands back, and what it reads too early, are both decided by what the lines behind it hold. The other two need only the run, and are none the worse for being asked beside ones that need more.");
  ("Only the silent wrongs are asked about. Whether the run is worth cutting - how long it is, how much it would be handed, what it would hand back - is a different question and belongs to whatever is choosing, not here.");
  let escapes = js_statements_escapes_unmatched(statements);
  let carried = js_statements_outer_assign_names(statements);
  let split = js_statements_span_outputs_closure_names(statements, tail);
  let late = js_statements_span_made_below_names(statements, tail);
  let refusals = list_concat_multiple([escapes, carried, split, late]);
  let cuttable = list_empty_is(refusals);
  return cuttable;
}
