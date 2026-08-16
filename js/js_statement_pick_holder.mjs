import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_node_function_is } from "./js_node_function_is.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_next } from "./list_next.mjs";
import { not } from "./not.mjs";
export function js_statement_pick_holder(stack) {
  arguments_assert(arguments, 1);
  ("Given the chain of code a word hangs from, the line at the top level of whichever function the word was written inside - the closest one, not the outermost.");
  ("Reading the chain backwards is what makes it the closest. The first function met on the way out is the one the word stands in, and the line wanted is the one directly under that function's own list of lines - which is exactly what the outermost reader asks for, of the outermost body.");
  ("The two readers that ask this share it, and they differ only in which mention of the word they hand over - the earliest one or the latest. Written out in each of them, a fix made in one would be silently missing from the other, which is the failure the search below them was already gathered into one place to avoid.");
  let nearest = list_copy_reverse(stack);
  for (let node of nearest) {
    let function_is = js_node_function_is(node);
    if (not(function_is)) {
      continue;
    }
    let body = js_function_declaration_to_block_body(node);
    let statement = list_next(stack, body);
    return statement;
  }
  return null;
}
