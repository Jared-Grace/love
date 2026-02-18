import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_list_calls } from "../../../love/public/src/js_list_calls.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_rule_sets_v_1 } from "../../../love/public/src/app_replace_rule_sets_v_1.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { js_visit_calls } from "../../../love/public/src/js_visit_calls.mjs";
import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
export async function app_replace_rule_sets_calls() {
  let ast = await function_ast(app_replace_rule_sets_v_1.name);
  let vs = js_list_calls(ast);
  let mapped = list_map_property(vs, "node");
  let names = list_map(mapped, js_call_callee_name);
  log({
    names,
  });
}
