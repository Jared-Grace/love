import { js_node_types_is } from "./js_node_types_is.mjs";
import { js_stack_last } from "./js_stack_last.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_slice_from } from "./list_slice_from.mjs";
import { null_is } from "./null_is.mjs";
export function js_stack_loop_condition_is(stack) {
  "Whether this place in the code sits in the header of a loop, where it is read again every time round rather than once";
  "A piece of an expression lifted out into a name above it is read once either way, everywhere except here. A loop header is asked again each time round, so lifting a piece of it out asks the question once and then keeps the first answer for the whole loop - and the loop then runs a different number of times than it was written to";
  "Proved rather than guessed at, and by the same measure the lifting itself uses: the lifted name is put in the innermost block above, so the piece escapes the loop exactly when the loop sits deeper in the stack than that block. Somewhere inside the loop body there is a block of its own in between, so a piece of the body is never mistaken for a piece of the header";
  "Only the three loops whose header runs again are counted. A for-of or for-in reads what it walks over once before it starts, so lifting a piece of that out changes nothing and is left alone";
  "A loop body written without braces has no block of its own, so a piece of it reads as a piece of the header and is left where it stands. That is more caution than it needs rather than less, and this repo writes the braces anyway";
  let block = js_stack_last(stack, "BlockStatement");
  let missing = null_is(block);
  let start = missing ? 0 : list_index_of(stack, block);
  let deeper = list_slice_from(stack, start);
  let types = ["ForStatement", "WhileStatement", "DoWhileStatement"];
  for (let one of deeper) {
    let loop_is = js_node_types_is(one, types);
    if (loop_is) {
      return true;
    }
  }
  return false;
}
