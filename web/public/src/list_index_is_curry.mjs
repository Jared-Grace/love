import { list_index_is } from "../../../love/public/src/list_index_is.mjs";
export function list_index_is_curry(list) {
  let r2 = function lambda(index) {
    let ii = list_index_is(list, index);
    return ii;
  };
  return r2;
}
