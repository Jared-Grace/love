import { ternary } from "../../../love/public/src/ternary.mjs";
export function boolean_to_text_validity(ii) {
  let result2 = ternary(ii, "valid", "invalid");
  return result2;
}
