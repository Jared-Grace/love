import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { app_bible_emoji_english_shown_get } from "./app_bible_emoji_english_shown_get.mjs";
import { app_bible_emoji_english_shown_set } from "./app_bible_emoji_english_shown_set.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_buttons_choice_pair } from "./app_shared_buttons_choice_pair.mjs";
import { app_emoji_bible_original_language_text } from "./app_emoji_bible_original_language_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_bible_emoji_key_shown_get } from "./app_bible_emoji_key_shown_get.mjs";
import { app_bible_emoji_key_shown_set } from "./app_bible_emoji_key_shown_set.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_emoji_bible_manuscript_text } from "./app_emoji_bible_manuscript_text.mjs";
import { app_bible_emoji_literal_shown_get } from "./app_bible_emoji_literal_shown_get.mjs";
import { app_bible_emoji_literal_shown_set } from "./app_bible_emoji_literal_shown_set.mjs";
export function app_emoji_bible_settings_choices(parent, fn_draw) {
  arguments_assert(arguments, 2);
  ("The three choices about what a chapter shows, each asked as a pair of buttons with the answer in force coloured: whether the English stands under each verse, whether the original does, and whose order the pictures follow.");
  ("THEY ARE IN SETTINGS, moved off the chapter's bar by the human, as a pair of buttons each rather than one button that flips, so a reader sees both answers and which one is theirs.");
  ("THE ORDER IS THE HUMAN'S: English first, then the original, then the order of the pictures.");
  ("THE ORIGINAL IS NAMED BY ITS LANGUAGE, read off the chapter the reader came from, because settings opens over the page without changing the address: Greek in the New Testament and Hebrew/Aramaic in the Old, asked for by the human. The order button names the same language through the same function, so the two cannot disagree.");
  ("EACH QUESTION SITS IN ITS OWN BLUE CARD, asked for by the human, the same card every other setting on the screen sits in, so where one question ends and the next begins is drawn rather than guessed.");
  let hash = html_hash_object_get();
  let chapter_code = app_shared_bible_chapter_hash_get_or_empty(hash);
  let english_shown = app_bible_emoji_english_shown_get();
  async function english_set(value) {
    app_bible_emoji_english_shown_set(value);
    await fn_draw();
  }
  let card_english = app_shared_container_blue(parent);
  app_shared_buttons_choice_pair(
    card_english,
    "Show English",
    "Hide English",
    english_shown,
    english_set,
  );
  let language = app_emoji_bible_original_language_text(chapter_code);
  let text_show = text_combine("Show ", language);
  let text_hide = text_combine("Hide ", language);
  let key_shown = app_bible_emoji_key_shown_get();
  async function key_set(value) {
    app_bible_emoji_key_shown_set(value);
    await fn_draw();
  }
  let card_key = app_shared_container_blue(parent);
  app_shared_buttons_choice_pair(
    card_key,
    text_show,
    text_hide,
    key_shown,
    key_set,
  );
  let card_order = app_shared_container_blue(parent);
  html_div_text(card_order, "What order should the emojis be in?");
  let manuscript = app_emoji_bible_manuscript_text(chapter_code);
  let literal_shown = app_bible_emoji_literal_shown_get();
  async function literal_set(value) {
    app_bible_emoji_literal_shown_set(value);
    await fn_draw();
  }
  app_shared_buttons_choice_pair(
    card_order,
    manuscript,
    "English translation",
    literal_shown,
    literal_set,
  );
}
