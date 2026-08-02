import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_get_try } from "./list_get_try.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { js_argument_droppable_is } from "./js_argument_droppable_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
export function js_call_named_argument_at_undroppable(ast, f_name, index) {
  "the arguments in this file that sit at index in a call to f_name and could not be dropped without changing what the file does";
  "asked before anything is written. a parameter comes off the declaration and off every call site in one move, so one call site that cannot be edited safely has to stop the whole thing rather than leave the repo half migrated";
  let unsafe = [];
  function lambda(node) {
    let args = js_call_arguments_get(node);
    let argument = list_get_try(args, index);
    let missing = undefined_is(argument);
    if (missing) {
      return;
    }
    let droppable = js_argument_droppable_is(argument);
    if (droppable) {
      return;
    }
    let code = js_unparse(argument);
    list_add(unsafe, code);
  }
  js_visit_calls_named_nodes(ast, f_name, lambda);
  return unsafe;
}
