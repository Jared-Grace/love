import { arguments_assert } from "./arguments_assert.mjs";
import { js_functions_nested_where } from "./js_functions_nested_where.mjs";
import { js_node_function_named_is } from "./js_node_function_named_is.mjs";
export function js_functions_nested_named(ast) {
  arguments_assert(arguments, 1);
  ("Every function written inside the exported one that carries a name, however deep it sits and whichever way it is written down.");
  ("The wider reading beside the one that asks only for functions written on lines of their own. Which of the two a caller wants is decided by what it means to do: taking a function's name away with it can only be done where the name is the whole of how it is reached, while leaving the name where it stands and moving only the body can be done wherever the function has a name at all.");
  let named = js_functions_nested_where(ast, js_node_function_named_is);
  return named;
}
