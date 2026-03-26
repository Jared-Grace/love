import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { js_property_value_set } from "../../../love/public/src/js_property_value_set.mjs";
import { js_string } from "../../../love/public/src/js_string.mjs";
import { js_object_expression_properties } from "../../../love/public/src/js_object_expression_properties.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { js_call_empty } from "../../../love/public/src/js_call_empty.mjs";
import { js_property } from "../../../love/public/src/js_property.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { js_object_expression_property_named_or_null } from "../../../love/public/src/js_object_expression_property_named_or_null.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
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
    let result = property_get(parsed, "result");
    let f_name2 = property_get(rs, "f_name");
    log(app_replace_rule_sets_why_generate.name, {
      parsed,
    });
    let list = await function_ast_list_type_nodes_object_expression(f_name2);
    function lambda3(e) {
      let search = "name";
      let found = js_object_expression_property_named_or_null(e, search);
      return found;
    }
    let f = list_find(list, lambda3);
    const property = "why";
    let found = js_object_expression_properties_find_key_named(f, property);
    let n = null_is(found);
    if (n) {
      let expression = js_parse_expression(property);
      let c = js_call_empty(error.name);
      found = js_property(expression, c);
      let properties = js_object_expression_properties(f);
      list_add(properties, found);
    }
    let s = js_string(parsed);
    js_property_value_set(found, s);
    let code = js_unparse(f);
    log(app_replace_rule_sets_why_generate.name, code);
  }
  await each_async(taken, lambda);
}
