import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function js_parse_expressions(names) {
  let mapped = list_map(names, js_parse_expression);
  return mapped;
}
