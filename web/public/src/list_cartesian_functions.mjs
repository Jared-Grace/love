import { list_cartesian_functions_inner } from "../../../love/public/src/list_cartesian_functions_inner.mjs";
export function list_cartesian_functions(list, fns) {
  let result = [];
  let candidate = [];
  let index = 0;
  list_cartesian_functions_inner(list, index, fns, result, candidate);
  return result;
}
