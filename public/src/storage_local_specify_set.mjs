import { undefined_is_if_null } from "../../../love/public/src/undefined_is_if_null.mjs";
import { json_to } from "./json_to.mjs";
export function storage_local_specify_set(storage_local_key, value) {
  value = undefined_is_if_null(value);
  let j = json_to({
    value,
  });
  localStorage.setItem(storage_local_key, j);
}
