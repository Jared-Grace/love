import { js_dollar_choice_arguments } from "../../../love/public/src/js_dollar_choice_arguments.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_identifiers_to_names } from "../../../love/public/src/js_identifiers_to_names.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export async function js_dollar_choice_arguments_names() {
  marker("1");
  let { properties } = await js_dollar_choice_arguments();
  let mapped = list_map_property(properties, "key");
  let names = js_identifiers_to_names(mapped);
  return names;
}
