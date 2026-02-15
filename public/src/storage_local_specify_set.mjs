import { log } from "../../../love/public/src/log.mjs";
import { json_to } from "./json_to.mjs";
export function storage_local_specify_set(storage_local_key, value) {
  let j = json_to({
    value,
  });
  localStorage.setItem(storage_local_key, j);
  log({});
}
