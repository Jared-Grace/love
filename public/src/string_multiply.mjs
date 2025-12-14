import { each_range } from "../../../love/public/src/each_range.mjs";
export function string_multiply(value, times) {
  let indentation = "";
  function lambda4(i) {
    indentation += value;
  }
  each_range(times, lambda4);
}
