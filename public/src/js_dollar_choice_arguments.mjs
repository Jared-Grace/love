import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_dollar } from "../../../love/public/src/js_dollar.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
import { marker_next_declare_single_init } from "../../../love/public/src/marker_next_declare_single_init.mjs";
export async function js_dollar_choice_arguments() {
  let result = null;
  let output = await function_transform(f_name, async function lambda2(ast) {});
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
