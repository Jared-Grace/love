import { js_dollar_choice_arguments } from "./js_dollar_choice_arguments.mjs";
import { marker } from "./marker.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function js_dollar_choice_arguments_names() {
  marker("1");
  let oe = await js_dollar_choice_arguments();
  let { properties } = oe;
  let mapped = list_map_property(properties, "key");
  let names = js_identifiers_to_names(mapped);
}
