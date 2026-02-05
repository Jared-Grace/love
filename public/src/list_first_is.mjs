import { list_first } from "../../../love/public/src/list_first.mjs";
export function list_first_is(list, item) {
  let f = list_first(list);
  let fi = f === item;
  return fi;
}
