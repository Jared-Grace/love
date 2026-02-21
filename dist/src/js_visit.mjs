import { not } from "../../../love/public/src/not.mjs";
import { promise_not_is } from "../../../love/public/src/promise_not_is.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { visit_filter } from "../../../love/public/src/visit_filter.mjs";
import { js_visit_children_get } from "../../../love/public/src/js_visit_children_get.mjs";
import { js_visit_filter } from "../../../love/public/src/js_visit_filter.mjs";
export function js_visit(ast, lambda$v) {
  let a = promise_not_is(ast);
  if (not(a)) {
    error();
  }
  visit_filter(ast, js_visit_children_get, js_visit_filter, lambda$v);
}
