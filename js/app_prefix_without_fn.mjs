import { app_prefix_without } from "./app_prefix_without.mjs";
export function app_prefix_without_fn(app_fn) {
  let name = app_fn.name;
  let without = app_prefix_without(name);
  return without;
}
