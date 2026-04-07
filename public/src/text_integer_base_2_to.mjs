import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { integer_base_2_text_to } from "../../../love/public/src/integer_base_2_text_to.mjs";
export function text_integer_base_2_to(integer_text) {
  let i = integer_to(integer_text);
  let r = integer_base_2_text_to(i);
  return r;
}
