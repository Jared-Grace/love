import { list_find } from "../../../love/public/src/list_find.mjs";
import { list_any } from "../../../love/public/src/list_any.mjs";
import { js_property_key_named_curried_right } from "../../../love/public/src/js_property_key_named_curried_right.mjs";
import { js_object_expression_properties } from "../../../love/public/src/js_object_expression_properties.mjs";
import { app_replace_rule_sets_why_generate_single_openai } from "../../../love/public/src/app_replace_rule_sets_why_generate_single_openai.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { function_ast_list_type_nodes_object_expression } from "../../../love/public/src/function_ast_list_type_nodes_object_expression.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_sets_why_generate_single } from "../../../love/public/src/app_replace_rule_sets_why_generate_single.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function app_replace_rule_sets_why_generate() {
  let r2 = app_replace_rule_sets_fns();
  function lambda2(fn) {
    let r3 = {
      f_name: fn.name,
      rule_set: fn(),
    };
    return r3;
  }
  let rule_sets = list_map(r2, lambda2);
  let taken = list_take(rule_sets, 2);
  ("generate all responses first");
  await each_async(taken, app_replace_rule_sets_why_generate_single);
  async function lambda(rs) {
    let rule_set = property_get(rs, "rule_set");
    let parsed =
      await app_replace_rule_sets_why_generate_single_openai(rule_set);
    let f_name2 = property_get(rs, "f_name");
    log(app_replace_rule_sets_why_generate.name, {
      f_name2,
    });
    let list = await function_ast_list_type_nodes_object_expression(f_name2);
    function lambda3(e) {
      let search = "name";
      let properties = js_object_expression_properties(e);
      let r = js_property_key_named_curried_right(search);
      let found = list_any(properties, r);
      return found;
    }
    let f = list_find(list, lambda3);
    let properties = js_object_expression_properties(e);
    log(app_replace_rule_sets_why_generate.name, f);
  }
  await each_async(taken, lambda);
}
