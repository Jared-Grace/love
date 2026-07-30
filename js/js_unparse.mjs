import { property_get } from "./property_get.mjs";
import { js_visit_each } from "./js_visit_each.mjs";
import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
import { js_visit_filter } from "./js_visit_filter.mjs";
import { js_unparse_inner } from "./js_unparse_inner.mjs";
import { promise_not_is_assert_json } from "./promise_not_is_assert_json.mjs";
export function js_unparse(ast) {
  promise_not_is_assert_json(ast, {
    hint: "the syntax tree to write back out arrived as a promise, so an await is missing where this was called",
  });
  let a = js_visit_filter(ast);
  if (not(a)) {
    let o = {
      ast,
    };
    error_json(o);
  }
  let code = null;
  try {
    code = js_unparse_inner(ast);
  } catch (e) {
    let current = null;
    function lambda(v) {
      let node = property_get(v, "node");
      try {
        js_unparse_inner(node);
      } catch (node_error) {
        current = node;
        return true;
      }
    }
    js_visit_each(ast, lambda);
    throw e;
  }
  return code;
}
