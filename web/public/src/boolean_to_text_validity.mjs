import { ternary } from "../../../love/public/src/ternary.mjs";
export function boolean_to_text_validity(b) {
  let v = ternary(b, "valid", "invalid");
  return v;
}
