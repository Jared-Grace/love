import { marker_call_replace_generic } from "../../../love/public/src/marker_call_replace_generic.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
export async function marker_call_replace(input, code_replacement) {
  let v = await marker_call_replace_generic(input, lambda);
  return v;
  function lambda(a) {
    let { replaced } = a;
    let replacement = js_parse_expression(code_replacement);
    object_replace(replaced, replacement);
  }
}
