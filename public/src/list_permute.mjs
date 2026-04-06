import { list_permute_inner } from "../../../love/public/src/list_permute_inner.mjs";
export function list_permute(list, fns) {
  let result = [];
  let candidate = [];
  list_permute_inner(index, list, fns, result, candidate);
  return result;
}
