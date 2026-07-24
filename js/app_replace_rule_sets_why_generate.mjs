import { app_replace_rule_sets_fns } from "./app_replace_rule_sets_fns.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_object_expression_property_named_or_null } from "./js_object_expression_property_named_or_null.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_property_value_set } from "./js_property_value_set.mjs";
import { js_string } from "./js_string.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { list_add } from "./list_add.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { error } from "./error.mjs";
import { js_call_empty } from "./js_call_empty.mjs";
import { js_property } from "./js_property.mjs";
import { null_is } from "./null_is.mjs";
import { list_find } from "./list_find.mjs";
import { app_replace_rule_sets_why_generate_single_openai } from "./app_replace_rule_sets_why_generate_single_openai.mjs";
import { log } from "./log.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_rule_sets_why_generate_single } from "./app_replace_rule_sets_why_generate_single.mjs";
import { list_map } from "./list_map.mjs";
import { list_take } from "./list_take.mjs";
import { each_async } from "./each_async.mjs";
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
  await each_async(rule_sets, app_replace_rule_sets_why_generate_single);
  async function lambda(rs) {
    let rule_set = property_get(rs, "rule_set");
    let parsed =
      await app_replace_rule_sets_why_generate_single_openai(rule_set);
    let result = property_get(parsed, "result");
    let f_name = property_get(rs, "f_name");
    async function lambda4(ast) {
      let type = "ObjectExpression";
      let list = js_list_type_nodes(ast, type);
      function lambda3(e) {
        let search = "name";
        let found = js_object_expression_property_named_or_null(e, search);
        return found;
      }
      let f = list_find(list, lambda3);
      let property = "why";
      let found = js_object_expression_property_named_or_null(f, property);
      let n = null_is(found);
      if (n) {
        let expression = js_parse_expression(property);
        let c = js_call_empty(error.name);
        found = js_property(expression, c);
        let properties = js_object_expression_properties(f);
        list_add(properties, found);
      }
      let s = js_string(result);
      js_property_value_set(found, s);
      let code = js_unparse(f);
      log(app_replace_rule_sets_why_generate.name, code);
    }
    let waited = await function_transform(f_name, lambda4);
  }
  await each_async(rule_sets, lambda);
}
