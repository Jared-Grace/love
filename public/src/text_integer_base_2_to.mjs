import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { integer_to_base_2 } from "../../../love/public/src/integer_to_base_2.mjs";
export function text_integer_base_2_to(integer_text) {
  let i = integer_to(integer_text);
  let r = integer_to_base_2(i);
  return r;
}
