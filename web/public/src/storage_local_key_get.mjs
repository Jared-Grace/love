export function storage_local_key_get(app_fn, key) {
  let ley = app_fn.name + " " + key;
  return ley;
}
