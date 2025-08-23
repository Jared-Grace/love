export function storage_local_key_get(app_fn, key) {
  let v = app_fn.name + " " + key;
  return v;
}
