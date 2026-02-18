import { firebase_deploy_function_app_main } from "../../../love/public/src/firebase_deploy_function_app_main.mjs";
import { js_visit_calls } from "../../../love/public/src/js_visit_calls.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
export async function app_replace_rule_sets_calls() {
  let v2 = await firebase_deploy_function_app_main(a_name);
  function lambda_inner(v) {
    let node = property_get(v, "node");
    let name = js_call_callee_name(node);
    if (equal_not(name, f_name)) {
      return;
    }
    let args = property_get(node, "arguments");
    lambda({
      v,
      args,
    });
  }
  js_visit_calls(ast, lambda_inner);
}
