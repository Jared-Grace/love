import { add } from "./add.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { list_is } from "./list_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_stack_list_sequence_is(stack, index_end) {
  "True when the list this far up the stack holds the pieces of a comma-joined expression rather than the statements of a body. A comment that names a function is written as pieces joined by commas, so anything inside one sits in an expression, and there is no statement list above it to lift a named local into.";
  let pieces = list_get_end(stack, index_end);
  let pieces_is = list_is(pieces);
  if (not(pieces_is)) {
    return false;
  }
  let index_from_end = add(index_end, 1);
  let owner_node = list_get_end(stack, index_from_end);
  let sequence_is = js_node_type_is(owner_node, "SequenceExpression");
  return sequence_is;
}
