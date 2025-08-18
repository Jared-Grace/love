import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
import { js_visit_filter } from "./js_visit_filter.mjs";
import { js_unparse_inner } from "./js_unparse_inner.mjs";
import { promise_not_is } from "./promise_not_is.mjs";
import { js_visit_each_async } from "./js_visit_each_async.mjs";
import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { import_install } from "./import_install.mjs";
import { json_format_to } from "./json_format_to.mjs";
export function js_unparse(ast) {
  let a2 = promise_not_is(ast);
  if (not(a2)) {
    error();
  }
  let a2 = js_visit_filter(ast);
  if (not(a2)) {
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
    async function lambda(v) {
      let { node } = v;
      try {
        js_unparse_inner(node);
      } catch (e) {
        current = a;
        let v2 = true;
        return v2;
      }
    }
    js_visit_each_async(ast, lambda);
    throw e;
  }
  return code;
}
