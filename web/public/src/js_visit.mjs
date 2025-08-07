import { visit_filter } from "./visit_filter.mjs";
import { js_visit_children_get } from "./js_visit_children_get.mjs";
import { visit_filter } from "./visit_filter.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function js_visit(parsed, on_each) {
  visit_filter(parsed, js_visit_children_get, n=>object_property_exists(n,'node'),on_each);
}
