import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { js_node_types_written_out } from "./js_node_types_written_out.mjs";
import { js_node_statements_work } from "./js_node_statements_work.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function js_node_written_out_largest_or_null(node) {
  arguments_assert(arguments, 1);
  ("The one thing written out in full inside this piece of code that holds the most work, or nothing when there is none.");
  ("Largest rather than first, and one rather than all, because the question being asked of it is whether a body is mostly a single thing looked things up in. Two small lists side by side do not make a body a table, and adding their weights together would say they did.");
  let largest = null;
  let most = 0;
  function note(inner) {
    let type = property_get(inner, "type");
    let types = js_node_types_written_out();
    let listed_is = list_includes(types, type);
    if (not(listed_is)) {
      return;
    }
    let work = js_node_statements_work(inner);
    let count = list_size(work);
    let more_is = greater_than(count, most);
    if (more_is) {
      most = count;
      largest = inner;
    }
  }
  js_visit_nodes(node, note);
  return largest;
}
