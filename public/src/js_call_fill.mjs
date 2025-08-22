import { js_function_last_asyncify } from "./js_function_last_asyncify.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { functions_names_includes } from "./functions_names_includes.mjs";
import { js_call_new } from "./js_call_new.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { object_replace } from "./object_replace.mjs";
export async function js_call_fill(ast) {
  async function lambda(v) {
    let { node, stack } = v;
    let { expression } = node;
    if (js_identifier_is(expression)) {
      let { name } = expression;
      let { unaliased } = await function_name_unalias(name);
      const valid = functions_names_includes(unaliased);
      if (valid) {
        let { parsed, async_is } = await js_call_new(name, ast);
        object_replace(node, parsed);
        js_function_last_asyncify(stack, async_is);
      }
    }
  }
  await js_visit_type_each_async(ast, "ExpressionStatement", lambda);
  return;
}
