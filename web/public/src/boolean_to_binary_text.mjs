import { text_to } from "../../../love/public/src/text_to.mjs";
import { boolean_to_binary } from "../../../love/public/src/boolean_to_binary.mjs";
export function boolean_to_binary_text(b) {
  let binary = boolean_to_binary(b);
  let binary_text = text_to(binary);
  return binary_text;
}
