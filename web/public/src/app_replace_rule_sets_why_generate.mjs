import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { app_replace_rule_sets_why_generate_single_openai } from "../../../love/public/src/app_replace_rule_sets_why_generate_single_openai.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_filter_null_not_is_single } from "../../../love/public/src/list_filter_null_not_is_single.mjs";
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
    function lambda3() {}
    let mapped = list_filter(list, lambda3);
    let f_name_after = list_filter_null_not_is_single(mapped);
    log(app_replace_rule_sets_why_generate.name, {
      f_name_after,
    });
  }
  await each_async(taken, lambda);
}
