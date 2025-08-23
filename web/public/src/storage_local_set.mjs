export function storage_local_set(app_fn, key, value) {
  localStorage.setItem(app_fn.name + " " + key, value);
}
