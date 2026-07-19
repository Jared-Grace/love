import { storage_local_set } from "./storage_local_set.mjs";
import { app_bible_mode_get } from "./app_bible_mode_get.mjs";
import { app_bible_mode_hash_key } from "./app_bible_mode_hash_key.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
export function app_bible_mode_set(mode) {
  ("share one storage key with the getter by using its function name as the namespace");
  storage_local_set(app_bible_mode_get, "mode", mode);
  ("mirror the mode into the hash so the url alone says which reader you are in, and so copying it hands someone the same view");
  html_hash_property_set(app_bible_mode_hash_key(), mode);
}
