import { ternary } from "../../../love/public/src/ternary.mjs";
export function boolean_to_text_validity(b) {
  let result2 = ternary(b, "valid", "invalid");
  return result2;
}
