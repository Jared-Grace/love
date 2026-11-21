import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_url_cycling } from "./gloss_word_sound_url_cycling.mjs";
import { english_word_sound_url } from "./english_word_sound_url.mjs";
import { english_word_sound_slow_url } from "./english_word_sound_slow_url.mjs";
import { property_get } from "./property_get.mjs";
import { html_sound_url_play } from "./html_sound_url_play.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_bible_word_sound_buttons(parent, word) {
  "$plain word";
  "Two buttons on a tapped English word's card: one says the word, the other says it slowly.";
  "★ THE RECORDINGS ARE THE ONES THE ENGLISH LEARNING APP ALREADY PLAYS, asked for by the word alone, so one recording serves every chapter and every app that shows English, and a name is said the way the name list says it.";
  "★ EACH PRESS TAKES THE NEXT VOICE IN THE CAST, slow and ordinary alike, the way the English learning app's speaker and turtle do, so a reader who presses twice hears two people.";
  "A word with no recording plays nothing, the same silence the English learning app gives; nothing on the card claims every word has one.";
  arguments_assert(arguments, 2);
  let cycling = gloss_word_sound_url_cycling(
    english_word_sound_url,
    english_word_sound_slow_url,
  );
  let sound_get = property_get(cycling, "sound");
  let slow_get = property_get(cycling, "slow");
  async function say() {
    let url = sound_get(word);
    await html_sound_url_play(url);
  }
  async function say_slowly() {
    let url = slow_get(word);
    await html_sound_url_play(url);
  }
  app_shared_button(parent, "🔊 Say it", say);
  app_shared_button(parent, "🐢 Slowly", say_slowly);
}
