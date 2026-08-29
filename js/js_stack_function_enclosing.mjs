import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_node_function_is } from "./js_node_function_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
export function js_stack_function_enclosing(stack) {
  arguments_assert(arguments, 1);
  ("the function a line was written inside - the innermost one, where functions stand inside functions");
  ("the chain a walk hands down runs outwards in and ends at the line itself, so the last function along it is the nearest one holding that line");
  ("nothing at all is the honest answer for a line at the top of a file, which stands inside no function. its neighbour asks whether there is any function below a given point in the same chain, which is the same walk read for a different purpose");
  let functions = list_filter(stack, js_node_function_is);
  let none_is = list_empty_is(functions);
  if (none_is) {
    let none = null;
    return none;
  }
  let enclosing = list_last(functions);
  return enclosing;
}
