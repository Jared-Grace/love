import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_object_expression_named } from "../../../love/public/src/js_object_expression_named.mjs";
export function js_dollar_choice_argument_find(ast, result) {
  let oes = js_object_expression_named(ast, "js_dollar_argument");
  result = list_single(oes);
  return result;
}
