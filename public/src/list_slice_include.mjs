import { list_slice } from "../../../love/public/src/list_slice.mjs";
export function list_slice_include(list, a, b) {
  let sliced = list_slice(list, a, b + 1);
  return sliced;
}
