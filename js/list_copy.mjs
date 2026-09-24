import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
export function list_copy(original) {
  function_duplicate_kind_parallel();
  let copy = [...original];
  return copy;
}
