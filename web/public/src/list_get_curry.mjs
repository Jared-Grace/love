import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_get_curry(list) {
  let getter = function list_get_curry_result(index) {
    let item = list_get(list, index);
    return item;
  };
  return getter;
}
