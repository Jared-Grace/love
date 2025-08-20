import { js_unparse } from "./js_unparse.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export async function js_code_string(value_string) {
  let parsed_string = js_parse_expression('""');
  object_property_set(parsed_string, "value", value_string);
  object_property_delete(parsed_string, "raw");
  let code_string = js_unparse(parsed_string);
  return code_string;
}
