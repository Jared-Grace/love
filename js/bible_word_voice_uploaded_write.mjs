import { retry } from "./retry.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_chapters_uploaded } from "./app_original_bible_gloss_chapters_uploaded.mjs";
import { bible_word_voice_chapter_asked } from "./bible_word_voice_chapter_asked.mjs";
import { bible_word_voices } from "./bible_word_voices.mjs";
import { bible_word_voice_record_local } from "./bible_word_voice_record_local.mjs";
import { google_text_to_speech_voice } from "./google_text_to_speech_voice.mjs";
import { sleep } from "./sleep.mjs";
export async function bible_word_voice_uploaded_write() {
  "Records every word a reader can tap in every published chapter, in both testaments, that has no clip yet in each of the voices the page goes round for it, onto this machine only, and reports how many clips were recorded and how many letters were sent to be said.";
  "★ EACH WORD'S VOICES ARE THE PAGE'S OWN CHOICE, asked of the same function the page asks when a word is tapped, so what is recorded is exactly what will be fetched; a list of voices kept here could drift from it and leave words silent.";
  "★ A CLIP MADE BY A GEMINI VOICE IS FOLLOWED BY A SEVEN-SECOND WAIT, because Gemini voices are limited per minute per project; the older voices are not, and a word already on disk is skipped without asking anything, so a stopped run carries on where it stopped.";
  "IT SENDS NOTHING UP, so the whole batch goes to storage in one upload beside a new stamp rather than clip by clip ahead of it.";
  "★ EVERY VOICE OF A WORD IS RECORDED BEFORE THE NEXT WORD IS BEGUN, because the page goes round the voices tap by tap, and a word with only some of them would be silent on the taps that land on the missing ones.";
  "★ GENESIS COMES FIRST, because it is where a reader starts and where the listener checks the voices; the rest follow in the order published.";
  "EACH CHAPTER IS ASKED FOR AGAIN ON A FAILURE, because a run of days is certain to meet a download that stalls, and one stall ending the run was seen. ★ THE WAITS SUM TO ABOUT AN HOUR (thirteen tries, each wait doubling from a second), because the standard five summed to fifteen seconds, and on 2026-10-07 a dropped connection outlasted them and stopped the run for two days with nobody watching.";
  arguments_assert(arguments, 0);
  let uploaded = await app_original_bible_gloss_chapters_uploaded();
  function lambda(c) {
    let r3 = c.startsWith("GEN");
    return r3;
  }
  let genesis = uploaded.filter(lambda);
  function lambda2(c) {
    let b = c.startsWith("GEN");
    let n = not(b);
    return n;
  }
  let rest = uploaded.filter(lambda2);
  let chapter_codes = [...genesis, ...rest];
  let recorded = 0;
  let characters = 0;
  for (let chapter_code of chapter_codes) {
    async function chapter_asked() {
      let forms2 = await bible_word_voice_chapter_asked(chapter_code);
      return forms2;
    }
    let forms = await retry(13, chapter_asked);
    for (let form of forms) {
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
  let r = {
    chapters: chapter_codes.length,
    recorded,
    characters_sent: characters,
  };
  return r;
}
