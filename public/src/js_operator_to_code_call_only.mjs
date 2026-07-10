import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
import { text_replace_space_to } from "../../../love/public/src/text_replace_space_to.mjs";
import { js_operator_to_code_call } from "../../../love/public/src/js_operator_to_code_call.mjs";
export function js_operator_to_code_call_only(o_f, next) {
  let r = js_operator_to_code_call(o_f, next);
  let nb = text_space_nb();
  function lambda(c) {
    let replaced = text_replace_space_to(t, nb);
    return replaced;
  }
  let call = property_transform(r, "call", lambda);
  return call;
}
