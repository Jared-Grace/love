import { arguments_assert } from "./arguments_assert.mjs";
import { js_functions_nested_named } from "./js_functions_nested_named.mjs";
import { js_functions_named_find } from "./js_functions_named_find.mjs";
export function js_function_nested_find_named_any(ast, name) {
  arguments_assert(arguments, 2);
  ("The function written inside the exported one under the name you give, however deep it sits and whichever way it is written down.");
  ("The wider twin of the finder beside it. That one reaches only functions standing on lines of their own, which is all its caller can move; this one also reaches a function written as a value - handed to a visitor, or put under a name in a table of cases - because the move that asks this one leaves the name exactly where it stands and carries out only the body.");
  ("Most of the length of a long function here is in that second kind, so the difference between the two lists is the difference between a move that reaches a third of the long functions and one that reaches nearly all of them.");
  let named = js_functions_nested_named(ast);
  let found = js_functions_named_find(named, name);
  return found;
}
