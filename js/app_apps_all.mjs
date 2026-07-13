import { app_apps_all_main_fns } from "./app_apps_all_main_fns.mjs";
import { app_index_generic } from "./app_index_generic.mjs";
import { list_map } from "./list_map.mjs";
export function app_apps_all(context) {
  let fns = app_apps_all_main_fns();
  function lambda(fn) {
    let entry = {
      app_fn: fn,
      text: "",
    };
    return entry;
  }
  let entries = list_map(fns, lambda);
  app_index_generic(context, entries);
}
