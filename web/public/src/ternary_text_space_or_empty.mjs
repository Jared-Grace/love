import { ternary } from "../../../love/public/src/ternary.mjs";
export function ternary_text_space_or_empty(includes) {
  let result = ternary(includes, " ", "");
  return result;
}
