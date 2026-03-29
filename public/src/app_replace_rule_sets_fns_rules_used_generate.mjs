import { js_flo_body_add_return_argument_curried_right } from "../../../love/public/src/js_flo_body_add_return_argument_curried_right.mjs";
import { js_flo_body_add_return_argument } from "../../../portfolio_qa/public/src/js_flo_body_add_return_argument.mjs";
import { function_transform_fn } from "../../../love/public/src/function_transform_fn.mjs";
import { app_replace_rule_sets_fns_rules_used } from "../../../love/public/src/app_replace_rule_sets_fns_rules_used.mjs";
import { object_adder_async } from "../../../love/public/src/object_adder_async.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { functions_asts_list } from "../../../love/public/src/functions_asts_list.mjs";
import { app_replace_rule_sets_fns_names } from "../../../love/public/src/app_replace_rule_sets_fns_names.mjs";
import { app_replace_rule_sets_fns_transform_lambda_curried_right } from "../../../love/public/src/app_replace_rule_sets_fns_transform_lambda_curried_right.mjs";
import { app_replace_rules_parse } from "../../../love/public/src/app_replace_rules_parse.mjs";
import { js_string } from "../../../love/public/src/js_string.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_object_to_expression } from "../../../love/public/src/js_object_to_expression.mjs";
import { js_object_expression_properties } from "../../../love/public/src/js_object_expression_properties.mjs";
import { js_property } from "../../../love/public/src/js_property.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_replace_rule_set_rules_used } from "../../../love/public/src/app_replace_rule_set_rules_used.mjs";
import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_replace_rule_sets_fns_rules_used_generate() {
  async function lambda3(oad) {
    async function lambda(a) {
      let name = property_get(a, "name");
      let rs = await function_run_args_none(name);
      log(app_replace_rule_sets_fns_rules_used_generate.name, {
        rs,
      });
      let rules = property_get(rs, "rules");
      let goals = property_get(rs, "goals");
      let rules_parsed = app_replace_rules_parse(rules);
      function lambda2(g) {
        let se = app_replace_start_end_get(g);
        let end = property_get(se, "end");
        let start = property_get(se, "start");
        let ru = app_replace_rule_set_rules_used(rules_parsed, start, end);
        return ru;
      }
      let rules_used = list_map(goals, lambda2);
      let item = property_get(a, "item");
      let properties = js_object_expression_properties(item);
      const p_name = "rules_used";
      let expression = js_object_to_expression(rules_used);
      let s = js_string(p_name);
      let p = js_property(s, expression);
      list_add(properties, p);
      oad(name, rules_used);
    }
    let r2 =
      await app_replace_rule_sets_fns_transform_lambda_curried_right(lambda);
    let names = app_replace_rule_sets_fns_names();
    let asts = await functions_asts_list(names);
    let waited = await list_map_unordered_async(asts, r2);
  }
  let result = await object_adder_async(lambda3);
  let e = js_object_to_expression(result);
  let r22 = js_flo_body_add_return_argument_curried_right(e);
  let output = await function_transform_fn(
    app_replace_rule_sets_fns_rules_used,
    r22,
  );
  return result;
}
