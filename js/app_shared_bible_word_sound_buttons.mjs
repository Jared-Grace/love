import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_url_cycling } from "./gloss_word_sound_url_cycling.mjs";
import { english_word_sound_url } from "./english_word_sound_url.mjs";
import { english_word_sound_slow_url } from "./english_word_sound_slow_url.mjs";
import { property_get } from "./property_get.mjs";
import { html_sound_url_play } from "./html_sound_url_play.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_word_sound_buttons(parent, word) {
  "$plain word";
  "Two buttons on a tapped English word's card: one says the word, the other says it slowly.";
  "★ THE RECORDINGS ARE THE ONES THE ENGLISH LEARNING APP ALREADY PLAYS, asked for by the word alone, so one recording serves every chapter and every app that shows English. Those were recorded from the word in small letters, and the Bible name list is filed under the capitalised spelling only, so a name here may not be said the way the name list says it.";
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
  ("EACH BUTTON SAYS WHAT IT DOES beside its picture (human 2026-11-24: some text besides the emojis - play audio pronouncing \"God\", slowly), worded like the card's Open button under it, which already names the word in curly quotes. REJECTED: the picture alone, so no reader needs it translated - the card's other buttons were already in English words, and the speaker and turtle alone left a reader guessing.");
  let quoted = text_combine_multiple(["“", word, "”"]);
  let text = text_combine("🔊 Play audio pronouncing ", quoted);
  app_shared_button(parent, text, say);
  let text2 = text_combine_multiple([
    "🐢 Play audio pronouncing ",
    quoted,
    " slowly",
  ]);
  app_shared_button(parent, text2, say_slowly);
}
