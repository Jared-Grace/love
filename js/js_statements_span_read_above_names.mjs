import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { list_intersection } from "./list_intersection.mjs";
export function js_statements_span_read_above_names(span, head) {
  "The names a run of lines brings into being that the lines above it already read.";
  "In a body read straight down there is only one way that can be true, and it is a function declaration: the language makes those before the first line runs, so a line above may call one written below it. Nothing else in this repo can be read before it is made.";
  "Once the run is cut out, the making stops being a declaration and becomes a plain binding at the call site, and a plain binding starts where it is written. So every reader above it is left holding nothing, and the failure arrives where the reading is rather than where the cut was.";
  "The mirror of what a run hands back, asked in the other direction: that one is what the run makes that the lines behind read, this one is what the run makes that the lines ahead read. The first is a service the cut can perform, and the second is a cut that cannot be performed at all.";
  arguments_assert(arguments, 2);
  let declared = js_statements_declared_names_direct(span);
  let referenced = js_statements_referenced_names(head);
  let early = list_intersection(declared, referenced);
  return early;
}
