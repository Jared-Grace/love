import { app_emoji_bible_literal_shown_get } from "./app_emoji_bible_literal_shown_get.mjs";
import { not } from "./not.mjs";
import { app_emoji_bible_literal_shown_set } from "./app_emoji_bible_literal_shown_set.mjs";
export function app_emoji_bible_literal_shown_toggle() {
  let shown = app_emoji_bible_literal_shown_get();
  let next = not(shown);
  app_emoji_bible_literal_shown_set(next);
  return next;
}
