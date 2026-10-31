import { storage_local_flag_get } from "./storage_local_flag_get.mjs";
export function app_emoji_bible_literal_shown_get() {
  let shown = storage_local_flag_get(app_emoji_bible_literal_shown_get);
  return shown;
}
