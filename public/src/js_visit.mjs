import { promise_not_is_assert } from "../../../love/public/src/promise_not_is_assert.mjs";
import { visit_filter } from "../../../love/public/src/visit_filter.mjs";
import { js_visit_children_get } from "../../../love/public/src/js_visit_children_get.mjs";
import { js_visit_filter } from "../../../love/public/src/js_visit_filter.mjs";
export function js_visit(ast, lambda$v) {
  promise_not_is_assert(ast);
  visit_filter(ast, js_visit_children_get, js_visit_filter, lambda$v);
}
