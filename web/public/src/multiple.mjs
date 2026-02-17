import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function multiple(left, right) {
  let combined = text_combine(left, right);
  function lambda(item, value) {}
  let value2 = list_reduce(list, lambda, inital);
  return combined;
}
