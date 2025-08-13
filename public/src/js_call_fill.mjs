import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { js_visit_each_async } from "./js_visit_each_async.mjs";
import { each_async } from "./each_async.mjs";
import { list_adder } from "./list_adder.mjs";
import { log } from "./log.mjs";
import { functions_names_includes } from "./functions_names_includes.mjs";
import { js_call_new } from "./js_call_new.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { object_replace } from "./object_replace.mjs";
export async function js_call_fill(ast) {
  let a = null;
  await js_visit_type_each_async(ast, "ExpressionStatement", async (v) => {
    log("test");
    let { node } = v;
    let { expression } = node;
    if (js_identifier_is(expression)) {
      let { name } = expression;
      const valid = functions_names_includes(name);
      log(name);
      if (valid) {
        let s = await js_call_new(name, ast);
        let message = await js_unparse(s);
        log(message);
        object_replace(node, s);
      }
    }
  });
  return;
  await js_unparse(a);
  await js_call_fill(ast2);
}
