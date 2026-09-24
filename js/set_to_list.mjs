import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
export function set_to_list(set) {
  function_duplicate_kind_parallel();
  ("The members of a set as a list, in the order they were first added.");
  let list = [...set];
  return list;
}
