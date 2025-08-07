import { visit_filter } from "./visit_filter.mjs";
import { js_visit_children_get } from "./js_visit_children_get.mjs";

import { js_visit_filter } from "./js_visit_filter.mjs";

export function js_visit(parsed, on_each) {
  visit_filter(parsed, js_visit_children_get, js_visit_filter,on_each);
}
