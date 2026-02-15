import { log } from "../../../love/public/src/log.mjs";
export function storage_local_specify_get_json(storage_local_key) {
  let r = localStorage.getItem(storage_local_key);
  log({
    r,
  });
  return r;
}
