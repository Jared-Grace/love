import {object_property_get} from './object_property_get.mjs';
import {js_parse_statement} from './js_parse_statement.mjs';
export function js_parse_expression(init_code) {
  let statement = js_parse_statement(init_code);
  let expression = object_property_get(statement, 'expression');
  return expression;
}
