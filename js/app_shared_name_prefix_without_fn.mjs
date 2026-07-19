import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
export function app_shared_name_prefix_without_fn(app_fn) {
  let name = app_fn.name;
  let without = app_shared_name_prefix_without(name);
  return without;
}
