import { not } from "../../../love/public/src/not.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { error } from "./error.mjs";
export function list_join(list, separator) {
  let joined = list.join(separator);
  return joined;
  let l = list_is(value);
  if (not(l)) {
    error({
      list,
    });
  }
}
