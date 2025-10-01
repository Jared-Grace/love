import { json_from } from "./json_from.mjs";
import { null_is } from "./null_is.mjs";
export function storage_local_specify_get(storage_local_key) {
  let json = localStorage.getItem(storage_local_key);
  let n = null_is(json);
  let result = null;
  if (n) {
    result = json;
  } else {
    let { value } = json_from(json);
    result = value;
  }
  return result;
}
