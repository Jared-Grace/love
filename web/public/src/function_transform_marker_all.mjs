import { js_markers } from "../../../love/public/src/js_markers.mjs";
import { function_transform_marker_arg } from "../../../love/public/src/function_transform_marker_arg.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function function_transform_marker_all(f_name, lambda$a) {
  await function_transform(f_name, lambda_marker);
  async function lambda_marker(ast) {
    let markers = js_markers(ast);
    async function lambda(v) {
      let a = function_transform_marker_arg(v, ast);
      await lambda$a(a);
    }
    await each_async(markers, lambda);
  }
}
