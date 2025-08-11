import { error } from "./error.mjs";
import { promise_is } from "./promise_is.mjs";
import { visit_filter } from "./visit_filter.mjs";
import { js_visit_children_get } from "./js_visit_children_get.mjs";
import { js_visit_filter } from "./js_visit_filter.mjs";
export function js_visit(ast, on_each) {
  if (promise_is(ast)) {
    error();
  }
  visit_filter(ast, js_visit_children_get, js_visit_filter, on_each);
}
