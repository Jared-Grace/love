import { list_permute_inner } from "../../../love/public/src/list_permute_inner.mjs";
export function list_permute(list, fns) {
  let result = [];
  let candidate = [];
  let index = 0;
  list_permute_inner(list, index, fns, result, candidate);
  return result;
}
