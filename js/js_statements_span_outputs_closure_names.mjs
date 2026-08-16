import { arguments_assert } from "./arguments_assert.mjs";
import { js_assigned_names } from "./js_assigned_names.mjs";
import { js_statements_functions_nested } from "./js_statements_functions_nested.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { js_statements_span_outputs } from "./js_statements_span_outputs.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
export function js_statements_span_outputs_closure_names(span, tail) {
  arguments_assert(arguments, 2);
  (
    "The names a run of lines would hand back that a function inside the run also holds - the ones a cut would quietly turn into two values that stop agreeing."
  );
  (
    "What a run hands back is handed back once, as a value, at the moment the run finishes. Every line that runs before that moment is on the giving side and every line that runs after it is on the receiving side, and for lines read straight down the page that is the whole story - which is why a name counted up inside the run and read once behind it survives a cut untouched."
  );
  (
    "A function is the exception, because a function is not finished when it is read. It keeps hold of the names around it and goes on reading and writing them long after the run that made it has ended - so a function made inside the run and handed to a button holds the giving side's name, while everything behind the cut holds the receiving side's. Two names, one word, and from the first write onwards they disagree."
  );
  (
    "So two ways across, and both are refused. A function inside the run that reads a name the lines behind go on writing to would read it forever as it stood when the run ended. A function inside the run that writes a name the lines behind go on reading would write where nothing behind can see."
  );
  (
    "Only what the run hands back is weighed, because a name it does not hand back was never in two places - the lines behind cannot so much as spell it."
  );
  (
    "Measured on the screen of a rule game. Thirty lines were offered as a clean cut; they open the name holding which rule the player has chosen, and the hint button made among them reads it while a click handler further down writes it. Cut there and the hint goes on answering with the value the name held when the screen was drawn, forever, with nothing anywhere to show that something is wrong."
  );
  let outputs = js_statements_span_outputs(span, tail);
  let functions = js_statements_functions_nested(span);
  let held_read = js_statements_referenced_names(functions);
  let held_written = list_map_concat_multiple(functions, js_assigned_names);
  let behind_written = list_map_concat_multiple(tail, js_assigned_names);
  let read_then_written = list_intersection(held_read, behind_written);
  let carried = list_concat_unique(read_then_written, held_written);
  let split = list_intersection(outputs, carried);
  return split;
}
