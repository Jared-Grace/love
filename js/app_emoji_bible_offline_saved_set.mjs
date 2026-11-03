import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_bible_emoji_offline_saved_get } from "./app_bible_emoji_offline_saved_get.mjs";
export function app_emoji_bible_offline_saved_set(saved) {
  arguments_assert(arguments, 1);
  ("$plain saved");
  ("the answer says whether every chapter is now kept on this device. It is a yes or a no to remember and nothing that runs.");
  ("Remember whether the whole picture Bible is kept on this device. The reading half owns the drawer, so the two cannot look in different places.");
  storage_local_set(app_bible_emoji_offline_saved_get, "offline_saved", saved);
}
