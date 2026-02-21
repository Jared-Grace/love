import { app_prefix_without } from "../../../love/public/src/app_prefix_without.mjs";
export function app_prefix_without_fn(app_fn) {
  const name = app_fn.name;
  let without = app_prefix_without(name);
  return without;
}
