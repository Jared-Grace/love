import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
export function list_random_item_invoke(list, fn) {
  let r2 = function lambda(i) {
    let r = list_random_item(list);
    fn(r);
  };
  return r2;
}
