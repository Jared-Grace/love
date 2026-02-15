import { json_to } from "./json_to.mjs";
export function storage_local_specify_set(value, storage_local_key) {
  let j = json_to({
    value,
  });
  localStorage.setItem(storage_local_key, j);
}
