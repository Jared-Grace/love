import { list_single } from "../../../love/public/src/list_single.mjs";
export function list_remove_at(list, index) {
  let e = list.splice(index, 1);
  let only = list_single(e);
  return only;
}
