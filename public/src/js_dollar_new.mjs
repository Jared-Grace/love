import { js_dollar_choices } from "./js_dollar_choices.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new(code) {
  marker("1");
  async function lambda(a) {}
  let code2 = await function_transform_marker_specified(
    js_dollar_choices.name,
    marker_name,
    lambda,
  );
}
