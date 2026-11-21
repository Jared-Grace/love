import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_bible_record } from "./app_bible_record.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function app_bible_record_project() {
  "The project this phone is recording into, or nothing if none has been chosen yet. A project holds one recording of each passage: sending again for the same passage replaces it, and a new project is a whole new reading that leaves the old one alone.";
  arguments_assert(arguments, 0);
  let key = text_frozen("project");
  let project = storage_local_get(app_bible_record, key);
  return project;
}
