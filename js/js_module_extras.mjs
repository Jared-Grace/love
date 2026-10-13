import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_module_extras(ast) {
  "Everything on a module's top line that is neither an import nor an export: a variable kept between calls, a statement run when the file loads, prose written beside the function.";
  "WHY IT EXISTS: the commands that write one function into its file carry the function and work the imports out again, and nothing else. Whatever this answers is exactly what such a write would drop.";
  arguments_assert(arguments, 1);
  let body = property_get(ast, "body");
  function lambda_extra(node) {
    let imported = js_node_type_is(node, "ImportDeclaration");
    let exported = js_node_type_is(node, "ExportNamedDeclaration");
    let extra = not(imported) && not(exported);
    return extra;
  }
  let extras = body.filter(lambda_extra);
  return extras;
}
