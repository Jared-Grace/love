import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
export function text_multiply(value, times) {
  function lambda(la) {}
  let list = list_adder(lambda);
  let result = "";
  function lambda4(i) {
    result += value;
  }
  each_range(times, lambda4);
  return result;
}
