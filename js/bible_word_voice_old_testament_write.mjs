import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { property_get } from "./property_get.mjs";
import { bible_word_form } from "./bible_word_form.mjs";
import { bible_word_voices } from "./bible_word_voices.mjs";
import { bible_word_voice_record_local } from "./bible_word_voice_record_local.mjs";
import { retry } from "./retry.mjs";
import { google_text_to_speech_voice } from "./google_text_to_speech_voice.mjs";
import { sleep } from "./sleep.mjs";
export async function bible_word_voice_old_testament_write() {
  "Records every different word of the whole Old Testament that has no clip yet in each of the voices the page goes round for it, published chapter or not, onto this machine only, and reports how many clips were recorded and how many letters were sent to be said.";
  "★ IT ASKS THE INTERLINEAR AND NOT THE PUBLISHED PAGES, because the point is a chapter that is silent on the day it is published rather than one recorded afterwards; the published recorder asks the pages, so a word the gloss explains together with its neighbours is only known once its chapter is written, and that run is still the one to make after each publish.";
  "★ EVERY VOICE OF A WORD IS RECORDED BEFORE THE NEXT WORD IS BEGUN, for the reason the published recorder gives: the page goes round the voices tap by tap.";
  "★ A CLIP MADE BY A GEMINI VOICE IS FOLLOWED BY A SEVEN-SECOND WAIT, and each clip is asked for again on a failure with waits summing to about an hour, for the reasons the published recorder gives; a word already on disk is skipped without asking anything, so a stopped run carries on where it stopped.";
  "IT SENDS NOTHING UP, so a batch goes to storage in one upload after its slow copies are made.";
  arguments_assert(arguments, 0);
  let chapters = await bible_interlinear_chapters_words_cache();
  let testament_old = ebible_testament_old_name();
  let seen = new Set();
  let recorded = 0;
  let characters = 0;
  for (let chapter_code of object_property_names(chapters)) {
    let testament_name = bible_chapter_testament_name(chapter_code);
    if (not_equal(testament_name, testament_old)) {
      continue;
    }
    let verses = property_get(chapters, chapter_code);
    for (let verse of verses) {
      for (let word of verse.words) {
        let form = bible_word_form(word.original);
        if (equal(form, "") || seen.has(form)) {
          continue;
        }
        seen.add(form);
        for (let voice_name of bible_word_voices(form)) {
          async function asked() {
            let r2 = await bible_word_voice_record_local(voice_name, form);
            return r2;
          }
          let made = await retry(13, asked);
          if (made) {
            recorded = recorded + 1;
            characters = characters + [...form].length;
            let voice = google_text_to_speech_voice(voice_name);
            if (voice.model_name) {
              await sleep(7000);
            }
          }
        }
      }
    }
  }
  let r = {
    words: seen.size,
    recorded,
    characters_sent: characters,
  };
  return r;
}
