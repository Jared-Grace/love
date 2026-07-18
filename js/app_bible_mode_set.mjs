import { storage_local_set } from "./storage_local_set.mjs";
import { app_bible_mode_get } from "./app_bible_mode_get.mjs";
export function app_bible_mode_set(mode) {
  ("share one storage key with the getter by using its function name as the namespace");
  storage_local_set(app_bible_mode_get, "mode", mode);
}
