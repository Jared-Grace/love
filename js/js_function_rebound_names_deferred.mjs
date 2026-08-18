import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_stack_last_function } from "./js_stack_last_function.mjs";
import { null_is } from "./null_is.mjs";
import { js_assigned_target } from "./js_assigned_target.mjs";
import { js_target_names_rebound } from "./js_target_names_rebound.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { js_assigned_visit } from "./js_assigned_visit.mjs";
export function js_function_rebound_names_deferred(declaration) {
  arguments_assert(arguments, 1);
  ("Every name this function points somewhere else from inside a function written within it, rather than from a line of its own.");
  ("A write made from inside a function written within this one happens whenever that function is called, which may be long after this one has finished - it is a click handler, a callback handed to a mapper, a step waited for. This one has already handed its answer back by then.");
  ("So a move that carries writes out and hands them back at the end can take a write made on a line of this function's own, and cannot take one of these. The write would land on the parameter the moved body was handed, the line waiting outside would go on reading the old value, and nothing anywhere would go red. Measured on 2026-08-18, a whole conversation screen would have been broken exactly this way: the closure moved out looked as though it wrote to the list of remaining turns, and the write was really inside the handler it installs.");
  ("What settles it is that some function stands between the write and the body it was written in - the same reading, made the same way, as the one asking whether a function hands an answer back of its own.");
  let block = property_get(declaration, "body");
  let names = [];
  function lambda(v) {
    let stack = property_get(v, "stack");
    let owner = js_stack_last_function(stack);
    let own_is = null_is(owner);
    if (own_is) {
      return;
    }
    let visited = property_get(v, "node");
    let target = js_assigned_target(visited);
    let found = js_target_names_rebound(target);
    list_add_multiple(names, found);
  }
  js_assigned_visit(block, lambda);
  return names;
}
