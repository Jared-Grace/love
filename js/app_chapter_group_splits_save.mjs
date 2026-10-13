import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { storage_local_name_set } from "./storage_local_name_set.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { app_shared_unsent_add_custom } from "./app_shared_unsent_add_custom.mjs";
export async function app_chapter_group_splits_save(app_name, path, splits) {
  "$plain app_name";
  "$plain path";
  "$plain splits";
  "Keep how a chapter is divided on this device at once, and put it in line to be sent - so a division made with no internet is not lost and reaches storage later.";
  "What is kept is only the verses that begin a group after the first; the first verse always begins one, so it is never written.";
  "It is written over the same address each time, so the last change is the one storage holds.";
  "The same writing goes beside the file as words storage keeps about it, because every page may ask about a file while some may not read one.";
  arguments_assert(arguments, 3);
  let json = json_to(splits);
  storage_local_name_set(app_name, path, json);
  let blob = new Blob([json], {
    type: "application/json",
  });
  let key = text_frozen("splits");
  let custom = {
    [key]: json,
  };
  await app_shared_unsent_add_custom(path, blob, custom);
}
