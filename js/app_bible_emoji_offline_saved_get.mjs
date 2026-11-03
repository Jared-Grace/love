import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_flag_get } from "./storage_local_flag_get.mjs";
export function app_bible_emoji_offline_saved_get() {
  arguments_assert(arguments, 0);
  ("Whether the whole picture Bible is kept on this device, remembered between visits.");
  ("IT IS WRITTEN ONLY ONCE EVERY CHAPTER HAS ARRIVED, so a yes here is a promise that any chapter opens with no internet. Rejected: counting the saved chapters each time Settings opens, which is a thousand reads to draw one line.");
  let saved = storage_local_flag_get(
    app_bible_emoji_offline_saved_get,
    "offline_saved",
  );
  return saved;
}
