import { js_dollar } from "./js_dollar.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_dollar_new_name } from "./js_dollar_new_name.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new_args(code) {
  async function lambda(a) {}
  let code2 = await function_transform_marker_specified(
    js_dollar.name,
    marker_name,
    lambda,
  );
  let combined = js_dollar_new_name(code);
  async function lambda2(ast) {}
  await function_transform(combined, lambda2);
  marker("1");
}
