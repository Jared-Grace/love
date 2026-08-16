import { js_rebound_names } from "./js_rebound_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_functions_nested } from "./js_statements_functions_nested.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { js_statements_span_outputs } from "./js_statements_span_outputs.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
export function js_statements_span_outputs_closure_names(span, tail) {
  arguments_assert(arguments, 2);
  ("The names a run of lines would hand back that a function inside the run also holds - the ones a cut would quietly turn into two values that stop agreeing.");
  ("What a run hands back is handed back once, as a value, at the moment the run finishes. Every line that runs before that moment is on the giving side and every line that runs after it is on the receiving side, and for lines read straight down the page that is the whole story - which is why a name counted up inside the run and read once behind it survives a cut untouched.");
  ("A function is the exception, because a function is not finished when it is read. It keeps hold of the names around it and goes on reading and writing them long after the run that made it has ended - so a function made inside the run and handed to a button holds the giving side's name, while everything behind the cut holds the receiving side's. Two names, one word, and from the first write onwards they disagree.");
  ("So two ways across, and both are refused. A function inside the run that reads a name the lines behind go on writing to would read it forever as it stood when the run ended. A function inside the run that writes a name the lines behind go on reading would write where nothing behind can see.");
  ("The two ways are weighed differently, and the difference is which side of the cut the name was born on. A name born inside the run reaches the lines behind only by being handed back, so a function inside the run writing to one splits nothing unless the run hands that name back - nothing behind can spell a name it was never given.");
  ("A name born above the run is in two places whichever way it is read, because both sides were given it. The run receives it as a value and the lines behind go on holding the original, so a function inside the run that reads one, and lines behind that point it somewhere else, disagree from the first write onwards - even though the run hands nothing back at all. So reading is weighed against every name, and writing only against the ones handed back.");
  ("Writing means pointing a name somewhere else, here as everywhere a name is handed on as a value. A function that fills a slot of a list, or sets something on an object, changes the one thing the run and the lines behind it are both looking at, so nothing splits and there is nothing to refuse.");
  ("Measured on the screen of a rule game. Thirty lines were offered as a clean cut; they open the name holding which rule the player has chosen, and the hint button made among them reads it while a click handler further down writes it. Cut there and the hint goes on answering with the value the name held when the screen was drawn, forever, with nothing anywhere to show that something is wrong.");
  let outputs = js_statements_span_outputs(span, tail);
  let functions = js_statements_functions_nested(span);
  let held_read = js_statements_referenced_names(functions);
  let held_written = list_map_concat_multiple(functions, js_rebound_names);
  let behind_written = list_map_concat_multiple(tail, js_rebound_names);
  let read_then_written = list_intersection(held_read, behind_written);
  let written_behind_read = list_intersection(held_written, outputs);
  let split = list_concat_unique(read_then_written, written_behind_read);
  return split;
}
