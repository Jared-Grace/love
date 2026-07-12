import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_map } from "./list_map.mjs";
export function js_parse_expressions(names) {
  let mapped = list_map(names, js_parse_expression);
  return mapped;
}
