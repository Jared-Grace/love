import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { list_intersection } from "./list_intersection.mjs";
export function js_statements_span_outputs(span, tail) {
  arguments_assert(arguments, 2);
  let declared = js_statements_declared_names_direct(span);
  let referenced = js_statements_referenced_names(tail);
  let outputs = list_intersection(declared, referenced);
  return outputs;
}
