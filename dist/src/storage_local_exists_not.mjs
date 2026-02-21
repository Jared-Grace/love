import { storage_local_exists } from "../../../love/public/src/storage_local_exists.mjs";
export function storage_local_exists_not(app_fn, key) {
  let exists = storage_local_exists(app_fn, key);
  return exists;
}
