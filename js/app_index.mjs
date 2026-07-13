import { app_index_main_fns } from "./app_index_main_fns.mjs";
import { app_index_generic } from "./app_index_generic.mjs";
export function app_index(context) {
  let entries = app_index_main_fns();
  app_index_generic(context, entries);
}
