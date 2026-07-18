import { storage_local_set } from "./storage_local_set.mjs";
import { app_language_sort_get } from "./app_language_sort_get.mjs";
export function app_language_sort_set(mode) {
  ("share one storage key with the getter by using its function name as the namespace");
  storage_local_set(app_language_sort_get, "mode", mode);
}
