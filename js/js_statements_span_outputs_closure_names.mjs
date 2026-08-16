import { arguments_assert } from "./arguments_assert.mjs";
import { js_assigned_names } from "./js_assigned_names.mjs";
import { js_statements_span_outputs } from "./js_statements_span_outputs.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
export function js_statements_span_outputs_closure_names(span, tail) {
  arguments_assert(arguments, 2);
  ("The names a run of lines would hand back that somebody goes on writing to afterwards - the ones a cut would quietly turn into two separate values.");
  ("What a run hands back is handed back once, as a value. A name that is only ever given its value and then read keeps working perfectly across a cut, because there is nothing later for the two sides to disagree about. A name that is written to again does not: the line doing the writing is on one side of the cut and something reading it is on the other, and from the moment of the first write the two are looking at different things.");
  ("The mirror of the refusal next door. That one refuses a run reaching back to write a name born above it; this one refuses a run handing forward a name that is written after it is born. Between them the rule is one rule - a cut may move lines but it may not split a name in two.");
  ("Measured on the longest such run in the record. Thirty lines of a screen were offered as a clean cut; they open the name holding which rule the player has chosen, and a button further down writes to it on every click. Cut there and the hint button goes on reading the name as it stood when the screen was built, forever, with nothing to show that anything is wrong.");
  ("The writing is looked for on both sides on purpose. A name written inside the run itself is no safer than one written after it, because the writing may sit in a function the run leaves behind - handed to a button, or held by something that outlives the lines that made it.");
  let outputs = js_statements_span_outputs(span, tail);
  let statements = list_concat(span, tail);
  let written = list_map_concat_multiple(statements, js_assigned_names);
  let split = list_intersection(outputs, written);
  return split;
}
