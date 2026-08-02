import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_get_try } from "./list_get_try.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { add } from "./add.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
export function js_call_named_argument_at_remove(ast, f_name, index) {
  "take the argument at index out of every call to f_name in this file";
  "a call already passing fewer arguments than that is left alone rather than treated as an error, because a shorter call is what the edit is turning every call into anyway";
  let removed = 0;
  function lambda(node) {
    let args = js_call_arguments_get(node);
    let argument = list_get_try(args, index);
    let missing = undefined_is(argument);
    if (missing) {
      return;
    }
    list_remove_at(args, index);
    removed = add(removed, 1);
  }
  js_visit_calls_named_nodes(ast, f_name, lambda);
  return removed;
}
