import { js_flo_body_empty_return } from "./js_flo_body_empty_return.mjs";
import { function_transform_exists_ensure } from "./function_transform_exists_ensure.mjs";
import { object_adder_async } from "./object_adder_async.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { functions_asts_list } from "./functions_asts_list.mjs";
import { app_replace_rule_sets_fns_names } from "./app_replace_rule_sets_fns_names.mjs";
import { app_replace_rule_sets_fns_transform_lambda_curried_right } from "./app_replace_rule_sets_fns_transform_lambda_curried_right.mjs";
import { app_replace_rules_parse } from "./app_replace_rules_parse.mjs";
import { js_string } from "./js_string.mjs";
import { list_add } from "./list_add.mjs";
import { js_object_to_expression } from "./js_object_to_expression.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { js_property } from "./js_property.mjs";
import { app_replace_start_end_get } from "./app_replace_start_end_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_replace_rule_set_rules_used } from "./app_replace_rule_set_rules_used.mjs";
import { function_run_args_none } from "./function_run_args_none.mjs";
import { log } from "./log.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_replace_rule_sets_fns_rules_used_generate() {
  async function lambda3(oad) {
    async function lambda(a) {
      let f_name = property_get(a, "name");
      let rs = await function_run_args_none(f_name);
      let name = property_get(rs, "name");
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
      let p_name = "rules_used";
      let expression = js_object_to_expression(rules_used);
      let s = js_string(p_name);
      let p = js_property(s, expression);
      list_add(properties, p);
      oad(name, rules_used);
    }
    let r =
      await app_replace_rule_sets_fns_transform_lambda_curried_right(lambda);
    let names = app_replace_rule_sets_fns_names();
    let asts = await functions_asts_list(names);
    let waited = await list_map_unordered_async(asts, r);
  }
  let result = await object_adder_async(lambda3);
  let e = js_object_to_expression(result);
  function lambda4(ast) {
    js_flo_body_empty_return(ast, e);
  }
  let f_name2 = fn_name("app_replace_rule_sets_fns_rules_used");
  await function_transform_exists_ensure(f_name2, lambda4);
  return result;
}
