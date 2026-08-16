import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_node_function_is } from "./js_node_function_is.mjs";
import { js_statement_find_name_generic } from "./js_statement_find_name_generic.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_next } from "./list_next.mjs";
import { not } from "./not.mjs";
export function js_statement_find_name_holder(ast, name) {
  arguments_assert(arguments, 2);
  ("The line at the top level of whichever function a name was written inside - the closest one, not the outermost.");
  ("The third way of addressing a line, and the one the other two leave out. Its two neighbours take the line the word is written on, however deep, and the line at the top of the outermost body. Neither can point at a branch or a loop standing inside a function written inside another one: the nearest reader goes past it to a line of its contents, and the outermost reader climbs clean out of the inner function and comes back holding the whole of it.");
  ("That shape is not rare. A screen here is one function holding a paint step written inside it, and the paint step is where the size is - measured on 2026-08-17 a screen of two hundred and twenty two carried one hundred and forty of it inside a single nested step. Every branch and every loop in that step could be addressed by neither reader, so the only cuts available were the ones that happened to fall on a plain line.");
  ("Reading the chain backwards is what makes it the closest function rather than any of them. The first function met on the way out is the one the word stands in, and the line wanted is the one directly under that function's own list of lines - which is exactly what the outermost reader asks for, of the outermost body.");
  function pick(stack) {
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
  let found = js_statement_find_name_generic(ast, name, pick);
  return found;
}
