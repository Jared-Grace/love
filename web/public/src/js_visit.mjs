import { visit_filter } from "./visit_filter.mjs";
import { js_visit_children_get } from "./js_visit_children_get.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_is } from "./list_is.mjs";

export function js_visit(parsed, on_each) {
  visit_filter(parsed, js_visit_children_get, n => js_node_is(n) || list_is(n),on_each);
}
