import { js_function_last_asyncify } from "../../../love/public/src/js_function_last_asyncify.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_call_new } from "../../../love/public/src/js_call_new.mjs";
import { functions_names_includes } from "../../../love/public/src/functions_names_includes.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function js_call_fill_inner(ast, v, functions, visited) {
  let stack = property_get(v, "stack");
  let node = property_get(v, "node");
  let expression = property_get(node, "expression");
  if (js_identifier_is(expression)) {
    let name = property_get(expression, "name");
    let unaliased = await function_name_unalias_only(name);
    const valid = await functions_names_includes(unaliased);
    if (valid) {
      let v3 = await js_call_new(unaliased, ast);
      let async_is = property_get(v3, "async_is");
      let parsed = property_get(v3, "parsed");
      object_replace(node, parsed);
      await js_function_last_asyncify(stack, async_is, ast, functions, visited);
    }
  }
}
