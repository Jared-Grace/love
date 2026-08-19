import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_loops_all } from "./js_node_loops_all.mjs";
import { js_loop_outer_rebound_names } from "./js_loop_outer_rebound_names.mjs";
import { js_node_statements_work_size } from "./js_node_statements_work_size.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_max_by } from "./list_max_by.mjs";
export function js_node_loop_walking_largest_or_null(node) {
  arguments_assert(arguments, 1);
  ("The one loop inside this piece of code that holds the most work while pointing an outer name somewhere else, or nothing at all when no loop does.");
  ("Largest rather than first, and one rather than all, for the same reason the table reading takes one written-out thing: the question is whether a body is mostly a single walk that cannot be taken apart. Two small such loops side by side do not make a body one walk, and adding their weights together would say that they did.");
  let loops = js_node_loops_all(node);
  function walking_is(loop) {
    let outer = js_loop_outer_rebound_names(loop);
    let walking = list_empty_not_is(outer);
    return walking;
  }
  let found = list_filter(loops, walking_is);
  let largest = list_max_by(found, js_node_statements_work_size);
  return largest;
}
