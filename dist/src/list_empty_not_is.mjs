import { not } from "../../../love/public/src/not.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
export function list_empty_not_is(list) {
  let a = list_empty_is(list);
  const ne = not(a);
  return ne;
}
