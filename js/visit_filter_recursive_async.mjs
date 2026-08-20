import { visit_filter_recursive_stack_message } from "./visit_filter_recursive_stack_message.mjs";
import { visit_filter_recursive_cycle_message } from "./visit_filter_recursive_cycle_message.mjs";
import { list_includes } from "./list_includes.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { each_async } from "./each_async.mjs";
import { list_add } from "./list_add.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_copy } from "./list_copy.mjs";
import { error } from "./error.mjs";
export async function visit_filter_recursive_async(
  node,
  children_get,
  filter,
  on_each,
  stack,
) {
  "Walks outward from a node, handing each one over BEFORE asking what it reaches. The plain twin does the opposite - it finishes everything below a node before handing the node over - and the two are NOT a tidying job waiting to be done.";
  "This order is what makes a graph walkable. The only thing built on this walk hands a node over and marks it as met in the same breath, then keeps only the unmet ones out of what that node reaches; so the marking has to happen before the reaching is asked for. Under the other order nothing would ever be marked in time to cut anything, and a graph leading back to where it started would be walked until the machine refused another step. Three cases in the corpus are graphs exactly like that.";
  "The plain twin's order is load-bearing in its own way: it walks a file, where everything below a node must be gathered before the node that holds it arrives.";
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
  let copy = list_copy(stack);
  await on_each({
    node,
    stack: copy,
  });
  let children = await children_get(node);
  async function lambda(c) {
    await visit_filter_recursive_async(c, children_get, filter, on_each, stack);
  }
  await each_async(children, lambda);
  let removed = list_pop(stack);
  if (not_equal(removed, node)) {
    let message = visit_filter_recursive_stack_message();
    error(message);
  }
}
