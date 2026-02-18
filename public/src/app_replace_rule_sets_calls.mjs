import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_rule_sets_v_1 } from "../../../love/public/src/app_replace_rule_sets_v_1.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { js_visit_calls } from "../../../love/public/src/js_visit_calls.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
export async function app_replace_rule_sets_calls() {
  let ast = await function_ast(app_replace_rule_sets_v_1.name);
  function lambda_inner(v) {
    let node = property_get(v, "node");
    let name = js_call_callee_name(node);
    log({
      name,
    });
  }
  js_visit_calls(ast, lambda_inner);
  let vs = js_list_type(ast, "CallExpression");
  let mapped = list_map_property(list, property_name);
}
