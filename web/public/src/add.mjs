import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function add(left, right) {
  const sum = text_combine(left, right);
  return sum;
}
