import { js_unparse_inner } from "./js_unparse_inner.mjs";
import { promise_not_is } from "./promise_not_is.mjs";
import { js_visit_each_async } from "./js_visit_each_async.mjs";
import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { import_install } from "./import_install.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function js_unparse(ast) {
  if (!promise_not_is(ast)) {
    error();
  }
  let output;
  try {
    output = js_unparse_inner(ast);
  } catch (e) {
    log("test");
    let current = null;
    await js_visit_each_async(ast, async (v) => {
      let { node } = v;
      try {
        js_unparse_inner(node);
      } catch (e) {
        current = a;
        return true;
      }
    });
    let message = json_format_to(current);
    log({
      message,
    });
    throw e;
  }
  return output;
}
