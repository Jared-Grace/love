import { text_replace_space_to } from "../../../love/public/src/text_replace_space_to.mjs";
import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
import { property_set_if_exists_not } from "../../../love/public/src/property_set_if_exists_not.mjs";
import { js_operator_left_right_to_code_call } from "../../../love/public/src/js_operator_left_right_to_code_call.mjs";
import { js_operator_to_expression } from "../../../love/public/src/js_operator_to_expression.mjs";
export function js_operator_to_code_call(o, next) {
  let e = js_operator_to_expression(o, next);
  let call = js_operator_left_right_to_code_call(o, e);
  let replaced = text_replace_space_nb(call);
  property_set_if_exists_not(e, "call", replaced);
  return e;
}
function text_replace_space_nb(call) {
  let nb = text_space_nb();
  let replaced = text_replace_space_to(call, nb);
  return replaced;
}
