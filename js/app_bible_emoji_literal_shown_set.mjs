import { storage_local_set } from "./storage_local_set.mjs";
import { app_bible_emoji_literal_shown_get } from "./app_bible_emoji_literal_shown_get.mjs";
export function app_bible_emoji_literal_shown_set(shown) {
  storage_local_set(app_bible_emoji_literal_shown_get, "literal_shown", shown);
}
