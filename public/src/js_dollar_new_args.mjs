import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_dollar_new_name } from "./js_dollar_new_name.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new_args(code) {
  let code2 = await function_transform_marker_specified(
    f_name,
    marker_name,
    async function lambda(a) {},
  );
  let combined = js_dollar_new_name(code);
  async function lambda2(ast) {}
  await function_transform(combined, lambda2);
  marker("1");
}
