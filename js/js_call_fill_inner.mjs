import { js_function_last_asyncify } from "./js_function_last_asyncify.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_call_new } from "./js_call_new.mjs";
import { functions_names_includes } from "./functions_names_includes.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { property_get } from "./property_get.mjs";
export async function js_call_fill_inner(ast, visitor, functions, visited) {
  let stack = property_get(visitor, "stack");
  let node = property_get(visitor, "node");
  let expression = property_get(node, "expression");
  if (js_identifier_is(expression)) {
    let name = property_get(expression, "name");
    let unaliased = await function_name_unalias_only(name);
    let valid = await functions_names_includes(unaliased);
    if (valid) {
      let v = await js_call_new(unaliased, ast);
      let async_is = property_get(v, "async_is");
      let parsed = property_get(v, "parsed");
      object_replace(node, parsed);
      await js_function_last_asyncify(stack, async_is, ast, functions, visited);
    }
  }
}
