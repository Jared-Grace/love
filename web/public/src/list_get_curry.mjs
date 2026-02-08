import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_get_curry(list) {
  let r = function lambda(index) {
    let item = list_get(list, index);
    return item;
  };
  return r;
}
