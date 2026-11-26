import { bible_reference_unbroken } from "./bible_reference_unbroken.mjs";
import { property_set_if_exists_not } from "./property_set_if_exists_not.mjs";
import { js_operator_left_right_to_code_call } from "./js_operator_left_right_to_code_call.mjs";
import { js_operator_to_expression } from "./js_operator_to_expression.mjs";
export function js_operator_to_code_call(o, next) {
  let e = js_operator_to_expression(o, next);
  let call = js_operator_left_right_to_code_call(o, e);
  let replaced = text_replace_space_nb(call);
  property_set_if_exists_not(e, "call", replaced);
  return e;
}
function text_replace_space_nb(call) {
  let replaced = bible_reference_unbroken(call);
  return replaced;
}
