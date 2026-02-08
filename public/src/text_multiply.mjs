import { each_range } from "../../../love/public/src/each_range.mjs";
export function text_multiply(value, times) {
  let result = "";
  function lambda4(i) {
    result += value;
  }
  each_range(times, lambda4);
  return result;
}
