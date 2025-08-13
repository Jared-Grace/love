import { js_visit_each_async } from "./js_visit_each_async.mjs";
import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { import_install } from "./import_install.mjs";
import { generate } from "astring";
export async function js_unparse(ast) {
  let output;
  try {
    output = generate(ast);
  } catch (e) {
    let current = null;
    await js_visit_each_async(a, async (v) => {
      let { node } = v;
      try {
        await js_unparse(current);
      } catch (e) {
        current = a;
        return true;
      }
    });
    let message = json_formnat_to(a);
    log(message);
    throw e;
  }
  return output;
}
