import { js_call_add_generic } from "../../../love/public/src/js_call_add_generic.mjs";
import { js_flo_body_add_first } from "../../../love/public/src/js_flo_body_add_first.mjs";
export async function js_call_add_first(ast, f_name) {
  let lambda_add = js_flo_body_add_first;
  await js_call_add_generic(f_name, lambda_add, ast);
}
