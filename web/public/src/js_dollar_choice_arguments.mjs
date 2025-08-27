import { js_dollar } from "./js_dollar.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { marker_next_declare_single_init } from "./marker_next_declare_single_init.mjs";
export async function js_dollar_choice_arguments() {
  let names = null;
  async function lambda(a) {
    let oe = marker_next_declare_single_init(a);
    names = oe;
    let { properties } = oe;
    let mapped = list_map_property(properties, "key");
    names = js_identifiers_to_names(mapped);
  }
  let code2 = await function_transform_marker_specified(
    js_dollar.name,
    "choice_arguments",
    lambda,
  );
  return names;
}
