import { js_flo_body_add } from "../../../love/public/src/js_flo_body_add.mjs";
import { js_call_add_generic } from "../../../love/public/src/js_call_add_generic.mjs";
export async function js_call_add(ast, f_name) {
  let lambda_add = js_flo_body_add;
  await js_call_add_generic(ast, f_name, lambda_add);
}
