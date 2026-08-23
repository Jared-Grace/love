import { property_list_map_property } from "./property_list_map_property.mjs";
import { js_dollar_choice_argument } from "./js_dollar_choice_argument.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
export async function js_dollar_choice_argument_names() {
  "Every name a dollar-choice may be written with - read out of the one argument that macro is defined to take, rather than kept in a second list beside it that could fall behind.";
  let v = await js_dollar_choice_argument();
  let mapped = property_list_map_property(v, "properties", "key");
  let names = js_identifiers_to_names(mapped);
  return names;
}
