import { js_visit_each } from "../../../love/public/src/js_visit_each.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
import { js_visit_filter } from "../../../love/public/src/js_visit_filter.mjs";
import { js_unparse_inner } from "../../../love/public/src/js_unparse_inner.mjs";
import { promise_not_is } from "../../../love/public/src/promise_not_is.mjs";
import { error } from "../../../love/public/src/error.mjs";
export function js_unparse(ast) {
  let a2 = promise_not_is(ast);
  if (not(a2)) {
    error();
  }
  let a3 = js_visit_filter(ast);
  if (not(a3)) {
    const o = {
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
      let { node } = v;
      try {
        js_unparse_inner(node);
      } catch (e) {
        current = node;
        let v2 = true;
        return v2;
      }
    }
    js_visit_each(ast, lambda);
    throw e;
  }
  return code;
}
