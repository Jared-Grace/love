import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { list_intersection } from "./list_intersection.mjs";
export function js_statements_span_outputs(span, tail) {
  "The names a run of lines about to leave its block must hand back - the ones it brings into being that the lines behind it still read";
  "A span that declares a name the rest of the block still reads cannot simply leave: the name would go with it and the reader behind would be left pointing at nothing. What is handed back is the mirror of the free names the new function takes in.";
  "Only what the span binds at its own level counts, which is the whole reason the direct reader is asked rather than its twin. A name bound inside a loop head or a nested block cannot be read behind the span whatever is written there, so handing it back is not a service - the call site is then handed a name nothing around it has bound, and the line stops the moment it is reached.";
  "Measured, before that was so: a span holding a loop whose head opened a name was cut out beside a later function whose own body opened a name spelled the same way. The one was read as escaping into the other, and the cut wrote a call passing a name that had never existed in the scope doing the calling. A cut is meant to be behaviour-preserving, so this was the worst kind of wrong - it looked exactly like a clean extraction.";
  arguments_assert(arguments, 2);
  let declared = js_statements_declared_names_direct(span);
  let referenced = js_statements_referenced_names(tail);
  let outputs = list_intersection(declared, referenced);
  return outputs;
}
