import { not } from "./not.mjs";
import { promise_not_is } from "./promise_not_is.mjs";
import { error } from "./error.mjs";
import { visit_filter } from "./visit_filter.mjs";
import { js_visit_children_get } from "./js_visit_children_get.mjs";
import { js_visit_filter } from "./js_visit_filter.mjs";
export function js_visit(ast, lambda$v) {
  let a = promise_not_is(ast);
  if (not(a)) {
    error();
  }
  visit_filter(ast, js_visit_children_get, js_visit_filter, lambda$v);
}
