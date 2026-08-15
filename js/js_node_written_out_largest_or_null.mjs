import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_written_out_all } from "./js_node_written_out_all.mjs";
import { js_node_statements_work_size } from "./js_node_statements_work_size.mjs";
import { list_max_by } from "./list_max_by.mjs";
export function js_node_written_out_largest_or_null(node) {
  arguments_assert(arguments, 1);
  ("The one thing written out in full inside this piece of code that holds the most work, or nothing at all when there is none.");
  ("Largest rather than first, and one rather than all, because the question this answers for is whether a body is mostly a single thing that gets looked things up in. Two small lists side by side do not make a body a table, and adding their weights together would say that they did.");
  let found = js_node_written_out_all(node);
  let largest = list_max_by(found, js_node_statements_work_size);
  return largest;
}
