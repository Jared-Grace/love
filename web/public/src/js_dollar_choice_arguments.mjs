import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { js_dollar } from "../../../love/public/src/js_dollar.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_object_expression_named } from "../../../love/public/src/js_object_expression_named.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function js_dollar_choice_arguments() {
  let result = null;
  async function lambda2(ast) {
    let oes = js_object_expression_named(ast, "js_dollar_arguments");
    let only = list_single(oes);
    let properties = property_get(only, "properties");
    let mapped = list_map_property(list, property_name);
    log({
      properties,
    });
    result = list_map(properties, js_identifier_name);
  }
  let output = await function_transform(js_dollar.name, lambda2);
  return result;
}
