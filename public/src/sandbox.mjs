import { each_async } from "../../../love/public/src/each_async.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { function_transform_result_inner_curried_right } from "../../../love/public/src/function_transform_result_inner_curried_right.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_declaration_single_name } from "../../../love/public/src/js_declaration_single_name.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
import { ternary } from "./ternary.mjs";
export async function sandbox() {
  async function lambda2(ast) {
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
  let waited = await functions_transform(lambda2);
  let lambda = await function_transform_result_inner_curried_right(lambda2);
  let f_names = await functions_names();
  await each_async(f_names, lambda);
}
