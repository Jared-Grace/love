import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_declaration_single_name } from "../../../love/public/src/js_declaration_single_name.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
export async function sandbox() {
  async function lambda(ast) {
    function lambda3(a) {
      let v = property_get(a, "v");
      let node = property_get(v, "node");
      let code = js_unparse(node);
      let n = js_declaration_single_name(ast);
      log({
        n,
        code,
      });
    }
    js_visit_calls_named(ast, ternary.name, lambda3);
  }
  let f_names = await functions_names();
  let asts = list_map(f_names, function_ast);
  await each_async(asts, lambda);
}
