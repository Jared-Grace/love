import { js_dollar_choice_argument } from "../../../love/public/src/js_dollar_choice_argument.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function js_dollar_choice_arguments() {
  let only = await js_dollar_choice_argument();
  let properties = property_get(only, "properties");
  let mapped = list_map_property(properties, "key");
  let result = list_map(mapped, js_identifier_name);
  return result;
}
