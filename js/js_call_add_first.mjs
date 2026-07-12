import { js_call_add_generic } from "./js_call_add_generic.mjs";
import { js_flo_body_add_first } from "./js_flo_body_add_first.mjs";
export async function js_call_add_first(ast, f_name) {
  let lambda_add = js_flo_body_add_first;
  await js_call_add_generic(ast, f_name, lambda_add);
}
