import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
import { text_replace_space_to } from "../../../love/public/src/text_replace_space_to.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_operator_to_code_call } from "../../../love/public/src/js_operator_to_code_call.mjs";
export function js_operator_to_code_call_only(o_f, next) {
  let r = js_operator_to_code_call(o_f, next);
  let nb = text_space_nb();
  let replaced2 = text_replace_space_to(t, nb);
  let call = property_get(r, "call");
  return call;
}
