import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_chapters_uploaded } from "./app_original_bible_gloss_chapters_uploaded.mjs";
import { bible_word_voice_chapter_asked } from "./bible_word_voice_chapter_asked.mjs";
import { bible_word_voice_name } from "./bible_word_voice_name.mjs";
import { bible_word_voice_record_local } from "./bible_word_voice_record_local.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { google_text_to_speech_voice } from "./google_text_to_speech_voice.mjs";
import { sleep } from "./sleep.mjs";
export async function bible_word_voice_uploaded_write() {
  "Records every word a reader can tap in every published chapter, in both testaments, that has no clip yet in the voice the page will ask for it in, onto this machine only, and reports how many were recorded and how many letters were sent to be said.";
  "★ EACH WORD'S VOICE IS THE PAGE'S OWN CHOICE, asked of the same function the page asks when a word is tapped, so what is recorded is exactly what will be fetched; a list of voices kept here could drift from it and leave words silent.";
  "★ A CLIP MADE BY A GEMINI VOICE IS FOLLOWED BY A SEVEN-SECOND WAIT, because Gemini voices are limited per minute per project; the older voices are not, and a word already on disk is skipped without asking anything, so a stopped run carries on where it stopped.";
  "IT SENDS NOTHING UP, so the whole batch goes to storage in one upload beside a new stamp rather than clip by clip ahead of it.";
  arguments_assert(arguments, 0);
  let chapter_codes = await app_original_bible_gloss_chapters_uploaded();
  let recorded = 0;
  let characters = 0;
  for (let chapter_code of chapter_codes) {
    let forms = await bible_word_voice_chapter_asked(chapter_code);
    for (let form of forms) {
      let voice_name = bible_word_voice_name(form);
      async function asked() {
        let r2 = await bible_word_voice_record_local(voice_name, form);
        return r2;
      }
      let made = await retry_standard(asked);
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
  let r = {
    chapters: chapter_codes.length,
    recorded,
    characters_sent: characters,
  };
  return r;
}
