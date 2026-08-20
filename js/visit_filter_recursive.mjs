import { visit_filter_recursive_stack_message } from "./visit_filter_recursive_stack_message.mjs";
import { visit_filter_recursive_cycle_message } from "./visit_filter_recursive_cycle_message.mjs";
import { list_includes } from "./list_includes.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_copy } from "./list_copy.mjs";
import { error } from "./error.mjs";
export function visit_filter_recursive(
  node,
  children_get,
  filter,
  on_each,
  stack,
) {
  "Walks down through a node, handing each one over AFTER everything below it. That way anything gathered on the way down is complete by the time the node holding it arrives - which is what a walk over a file is wanted for.";
  "The awaiting twin hands a node over before asking what it reaches instead, and says at its own head why it has to. The two orders are deliberate and different; making them agree would break whichever one was moved.";
  let a = filter(node);
  if (not(a)) {
    return;
  }
  let inside = list_includes(stack, node);
  if (inside) {
    let cycle_message = visit_filter_recursive_cycle_message();
    error(cycle_message);
  }
  list_add(stack, node);
  let children = children_get(node);
  function visit_filter_recursive_each_child(c) {
    visit_filter_recursive(c, children_get, filter, on_each, stack);
  }
  each(children, visit_filter_recursive_each_child);
  let copy = list_copy(stack);
  on_each({
    node,
    stack: copy,
  });
  let removed = list_pop(stack);
  if (not_equal(removed, node)) {
    let message = visit_filter_recursive_stack_message();
    error(message);
  }
}
