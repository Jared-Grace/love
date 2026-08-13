import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_combine_middle_space(left, right) {
  function_duplicate_kind_parallel();
  let combined = text_combine_multiple([left, " ", right]);
  return combined;
}
