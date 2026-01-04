import { not } from "../../../love/public/src/not.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { error } from "./error.mjs";
export function list_join(list, separator) {
  let l = list_is(list);
  if (not(l)) {
    error({
      list,
    });
  }
  let joined = list.join(separator);
  return joined;
}
