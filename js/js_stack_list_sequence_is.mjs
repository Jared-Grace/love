import { js_stack_list_owner_or_null } from "./js_stack_list_owner_or_null.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_stack_list_sequence_is(stack, index_end) {
  "True when the list this far up the stack holds the pieces of a comma-joined expression rather than the statements of a body. A comment that names a function is written as pieces joined by commas, so anything inside one sits in an expression, and there is no statement list above it to lift a named local into.";
  let owner_node = js_stack_list_owner_or_null(stack, index_end);
  let sequence_is = js_node_type_is(owner_node, "SequenceExpression");
  return sequence_is;
}
