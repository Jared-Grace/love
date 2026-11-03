import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_emoji_tradition_get } from "./app_bible_emoji_tradition_get.mjs";
import { app_bible_emoji_key_shown_get } from "./app_bible_emoji_key_shown_get.mjs";
import { app_bible_emoji_english_shown_get } from "./app_bible_emoji_english_shown_get.mjs";
import { app_bible_emoji_literal_shown_get } from "./app_bible_emoji_literal_shown_get.mjs";
export function app_emoji_bible_views_chosen() {
  arguments_assert(arguments, 0);
  ("The four choices a reader has made about how a chapter is drawn - which cross, whether the original is under each verse, whether the English is, and whether the pictures follow the manuscript's order - read once and handed back together for the chapter to be drawn from.");
  ("ALL FOUR ARE CHOSEN IN SETTINGS NOW, moved off the chapter's bar by the human, so nothing here draws a button; the chapter reads them in one place so a chapter cannot be drawn from half of them.");
  let tradition = app_bible_emoji_tradition_get();
  let key_shown = app_bible_emoji_key_shown_get();
  let english_shown = app_bible_emoji_english_shown_get();
  let literal_shown = app_bible_emoji_literal_shown_get();
  let r = {
    tradition,
    key_shown,
    english_shown,
    literal_shown,
  };
  return r;
}
