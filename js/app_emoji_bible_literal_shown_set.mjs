import { storage_local_set } from "./storage_local_set.mjs";
import { app_emoji_bible_literal_shown_get } from "./app_emoji_bible_literal_shown_get.mjs";
export function app_emoji_bible_literal_shown_set(shown) {
  storage_local_set(app_emoji_bible_literal_shown_get, "literal_shown", shown);
}
