import { promise_not_is } from "./promise_not_is.mjs";
import { js_visit_each_async } from "./js_visit_each_async.mjs";
import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { import_install } from "./import_install.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { generate } from "astring";
export async function js_unparse(ast) {
  if (!promise_not_is(ast)) {
    error();
  }
  let output;
  try {
    output = generate(ast);
  } catch (e) {
    let current = null;
    await js_visit_each_async(ast, async (v) => {
      let { node } = v;
      try {
        await js_unparse(node);
      } catch (e) {
        current = a;
        return true;
      }
    });
    let message = json_format_to(current);
    log(message);
    throw e;
  }
  return output;
}
