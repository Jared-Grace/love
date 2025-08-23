import {object_property_delete} from "./object_property_delete.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {js_parse_expression} from "./js_parse_expression.mjs";
export function js_string(value_string) {
  let parsed_string = js_parse_expression('""');
  object_property_set(parsed_string, "value", value_string);
  object_property_delete(parsed_string, "raw");
  return parsed_string;
}
