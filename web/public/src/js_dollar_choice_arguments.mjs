import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_object_expression_named } from "../../../love/public/src/js_object_expression_named.mjs";
export async function js_dollar_choice_arguments() {
  let result = null;
  async function lambda2(ast) {
    let oes = js_object_expression_named(ast, search);
    let only = list_single(oes);
    let properties = property_get(only, "properties");
    result = list_map(properties, js_identifier_is);
  }
  return result;
}
