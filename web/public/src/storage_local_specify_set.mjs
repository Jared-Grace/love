import { json_to } from "../../../love/public/src/json_to.mjs";
export function storage_local_specify_set(value, storage_local_key) {
  let v = json_to({
    value,
  });
  localStorage.setItem(storage_local_key, v);
}
