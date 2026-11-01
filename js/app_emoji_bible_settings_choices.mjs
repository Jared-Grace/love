import { arguments_assert } from "./arguments_assert.mjs";
import { app_emoji_bible_key_shown_get } from "./app_emoji_bible_key_shown_get.mjs";
import { app_emoji_bible_key_shown_set } from "./app_emoji_bible_key_shown_set.mjs";
import { app_shared_buttons_choice_pair } from "./app_shared_buttons_choice_pair.mjs";
import { app_emoji_bible_english_shown_get } from "./app_emoji_bible_english_shown_get.mjs";
import { app_emoji_bible_english_shown_set } from "./app_emoji_bible_english_shown_set.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { app_emoji_bible_manuscript_text } from "./app_emoji_bible_manuscript_text.mjs";
import { app_emoji_bible_literal_shown_get } from "./app_emoji_bible_literal_shown_get.mjs";
import { app_emoji_bible_literal_shown_set } from "./app_emoji_bible_literal_shown_set.mjs";
export function app_emoji_bible_settings_choices(parent, fn_draw) {
  arguments_assert(arguments, 2);
  ("The three choices about what a chapter shows, each asked as a pair of buttons with the answer in force coloured: whether the original stands under each verse, whether the English does, and whose order the pictures follow.");
  ("THEY ARE IN SETTINGS, moved off the chapter's bar by the human, as a pair of buttons each rather than one button that flips, so a reader sees both answers and which one is theirs.");
  ("THE ORDER QUESTION NAMES THE MANUSCRIPT OF THE CHAPTER THE READER CAME FROM, read off the link, because settings opens over the page without changing the address; Greek in the New Testament and Hebrew/Aramaic in the Old.");
  let key_shown = app_emoji_bible_key_shown_get();
  async function key_set(value) {
    app_emoji_bible_key_shown_set(value);
    await fn_draw();
  }
  app_shared_buttons_choice_pair(
    parent,
    "Show original",
    "Hide original",
    key_shown,
    key_set,
  );
  let english_shown = app_emoji_bible_english_shown_get();
  async function english_set(value) {
    app_emoji_bible_english_shown_set(value);
    await fn_draw();
  }
  app_shared_buttons_choice_pair(
    parent,
    "Show English",
    "Hide English",
    english_shown,
    english_set,
  );
  html_div_text(parent, "What order should the emojis be in?");
  let hash = html_hash_object_get();
  let chapter_code = app_shared_bible_chapter_hash_get_or_empty(hash);
  let manuscript = app_emoji_bible_manuscript_text(chapter_code);
  let literal_shown = app_emoji_bible_literal_shown_get();
  async function literal_set(value) {
    app_emoji_bible_literal_shown_set(value);
    await fn_draw();
  }
  app_shared_buttons_choice_pair(
    parent,
    manuscript,
    "English translation",
    literal_shown,
    literal_set,
  );
}
