import { visit } from "./visit.mjs";
import { js_visit_children_get } from "./js_visit_children_get.mjs";
export function js_visit(parsed, on_each) {
  visit(parsed, js_visit_children_get, on_each);
}
