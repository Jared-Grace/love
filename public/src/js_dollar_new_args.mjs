import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { marker_next_declare_single_init } from "./marker_next_declare_single_init.mjs";
import { js_dollar } from "./js_dollar.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_dollar_new_name } from "./js_dollar_new_name.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new_args(code) {
  let result = null;
  async function lambda(a) {
    let oe = marker_next_declare_single_init(a);
    let { properties } = oe;
    let mapped = list_map_property(properties, "key");
    let names = js_identifiers_to_names(identifiers);
  }
  let code2 = await function_transform_marker_specified(
    js_dollar.name,
    "choice_arguments",
    lambda,
  );
  return result;
  let combined = js_dollar_new_name(code);
  async function lambda2(ast) {}
  await function_transform(combined, lambda2);
  marker("1");
}
