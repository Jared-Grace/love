import { js_dollar } from "./js_dollar.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker_next_declare_single_init } from "./marker_next_declare_single_init.mjs";
export async function js_dollar_choice_arguments() {
  let result = null;
  async function lambda(a) {
    result = marker_next_declare_single_init(a);
  }
  let code2 = await function_transform_marker_specified(
    js_dollar.name,
    "choice_arguments",
    lambda,
  );
  return result;
}
