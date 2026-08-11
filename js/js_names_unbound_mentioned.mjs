import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_scope_binder_nearest } from "./js_scope_binder_nearest.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { set_includes } from "./set_includes.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
export function js_names_unbound_mentioned(ast) {
  arguments_assert(arguments, 1);
  ("Every name mentioned under this tree that has at least one mention no scope around it binds - the names whose value has to come from outside the file, whether that is an import, a global, or nothing at all.");
  ("The plural sibling of asking, name by name, which mentions of one name read no binding. That one walks the whole tree once for every name it is asked about, and the caller with the most to ask is the sweep for names nothing supplies: measured 2026-08-11, seven or eight private names a file over eight thousand files came to sixty-four seconds, the largest single thing left in that gate. One walk answers about every name at once, because the walk already has the scopes around each mention in its hand and the name is only which question it is being asked.");
  ("A mention that merely names a property or a key is text rather than a reading, so it is left out the same way the single-name sibling leaves it out.");
  ("It says which names, not which mentions. A caller wanting the mentions of one particular binding still wants the sibling, because that question is about one binding rather than about a name.");
  let referenced_nodes = js_identifiers_referenced_nodes(ast);
  let referenced = list_unique_set(referenced_nodes);
  let unbound = new Set();
  function consider(v) {
    let node = property_get(v, "node");
    let identifier = js_node_type_is(node, "Identifier");
    if (not(identifier)) {
      return;
    }
    let reads_value = set_includes(referenced, node);
    if (not(reads_value)) {
      return;
    }
    let name = property_get_name(node);
    let stack = property_get(v, "stack");
    let nearest = js_scope_binder_nearest(stack, name);
    let outside = equal(nearest, null);
    if (outside) {
      unbound.add(name);
    }
  }
  js_visit(ast, consider);
  return unbound;
}
