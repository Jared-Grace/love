import { not } from "../../../love/public/src/not.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { error_json } from "./error_json.mjs";
export function list_join(list, separator) {
  let l = list_is(list);
  if (not(l)) {
    error_json({
      list,
    });
  }
  let joined = list.join(separator);
  return joined;
}
