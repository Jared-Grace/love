import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { js_node_types_written_out } from "./js_node_types_written_out.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function js_node_written_out_all(node) {
  arguments_assert(arguments, 1);
  ("Everything written out in full anywhere inside this piece of code - every list of things and every thing with named parts, at any depth.");
  ("At any depth rather than at the top, because a body that is really one big table nearly always hands that table to something else on the way past, and the table is then written inside the line that hands it over rather than beside it.");
  let found = [];
  let types = js_node_types_written_out();
  function note(inner) {
    let type = property_get(inner, "type");
    let listed_is = list_includes(types, type);
    if (listed_is) {
      list_add(found, inner);
    }
  }
  js_visit_nodes(node, note);
  return found;
}
