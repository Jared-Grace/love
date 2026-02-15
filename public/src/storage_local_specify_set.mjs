import { undefined_is_if_null } from "../../../love/public/src/undefined_is_if_null.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { json_to } from "./json_to.mjs";
export function storage_local_specify_set(storage_local_key, value) {
  let result2 = undefined_is_if_null(result);
  let j = json_to({
    value,
  });
  localStorage.setItem(storage_local_key, j);
  log({
    storage_local_key,
    j,
  });
}
