import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_named_find_alias } from "./js_call_named_find_alias.mjs";
import { js_node_to_visitor_stack } from "./js_node_to_visitor_stack.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { list_next } from "./list_next.mjs";
export async function js_statement_find_call_named_body(ast, f_name) {
  arguments_assert(arguments, 2);
  ("The line of the function's own body that the call to a named function stands somewhere inside, however deep.");
  ("The sibling of this without the suffix answers with the nearest line, which is the right answer for an edit that means to touch the call itself. It is the wrong one for choosing the ends of a span, because the two ends have to sit in the same block and a call written inside a loop names a line inside that loop. Every attempt to cut a run that ended in a loop failed on that, and the loops are exactly what the long functions are long with.");
  ("Climbing all the way out instead makes a loop addressable by any name called inside it, which is usually the only name worth reaching for - a loop's own line begins with a word the language chose, not one this repo did.");
  let only = await js_call_named_find_alias(ast, f_name);
  let stack = js_node_to_visitor_stack(ast, only);
  let body = js_flo_body(ast);
  let item = list_next(stack, body);
  return item;
}
