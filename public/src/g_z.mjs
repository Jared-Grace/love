import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
export function g_z(z) {
  let index = list_index_of(["tile", "character", "click"], z);
  return index;
}
