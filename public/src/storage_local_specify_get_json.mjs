export function storage_local_specify_get_json(storage_local_key) {
  let v = localStorage.getItem(storage_local_key);
  return v;
}
