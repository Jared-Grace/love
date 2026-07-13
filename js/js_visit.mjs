import { promise_not_is_assert_json } from "./promise_not_is_assert_json.mjs";
import { visit_filter } from "./visit_filter.mjs";
import { js_visit_children_get } from "./js_visit_children_get.mjs";
import { js_visit_filter } from "./js_visit_filter.mjs";
export function js_visit(ast, lambda$v) {
  promise_not_is_assert_json(ast, {
    hint: "the ast should not be a promise — did an async step get passed in without await?",
  });
  visit_filter(ast, js_visit_children_get, js_visit_filter, lambda$v);
}
