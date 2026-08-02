import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_types_is } from "./js_node_types_is.mjs";
export function js_stack_loop_condition_is(stack) {
  "Whether this place in the code sits in the header of a loop, where it is read again every time round rather than once";
  "A piece of an expression lifted out into a name above it is read once either way, everywhere except here. A loop header is asked again each time round, so lifting a piece of it out asks the question once and then keeps the first answer for the whole loop - and the loop then runs a different number of times than it was written to. Measured on 2026-08-02: a loop over a list the body shortens gave back two numbers before and four after";
  "Proved by the same measure the lifting itself uses. The lifted name is put in the innermost block above, so a piece of code escapes the loop exactly when the loop stands deeper in the stack than that block. A piece of the loop body always has the body's own block in between, so it is never mistaken for a piece of the header";
  "Only the three loops whose header runs again are counted. A for-of or for-in reads what it walks over once before it starts, so lifting a piece of that out changes nothing and is left alone";
  "A loop body written without braces has no block of its own, so a piece of it reads as a piece of the header and is left where it stands. That is more caution than it needs rather than less, and this repo writes the braces anyway";
  let types = ["ForStatement", "WhileStatement", "DoWhileStatement"];
  let below_block = false;
  for (let one of stack) {
    let block_is = js_node_type_is(one, "BlockStatement");
    if (block_is) {
      below_block = false;
      continue;
    }
    let loop_is = js_node_types_is(one, types);
    if (loop_is) {
      below_block = true;
    }
  }
  return below_block;
}
