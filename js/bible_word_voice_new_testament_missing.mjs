import { app_original_bible_gloss_chapters_new_testament } from "./app_original_bible_gloss_chapters_new_testament.mjs";
import { bible_word_voice_chapter_missing } from "./bible_word_voice_chapter_missing.mjs";
import { equal } from "./equal.mjs";
import { bible_word_speech_text } from "./bible_word_speech_text.mjs";
export async function bible_word_voice_new_testament_missing(voice_name) {
  "$plain voice_name";
  "Every published New Testament chapter that still has words with no clip in one voice, and how many letters recording all of them would send to be said.";
  "A WORD MISSING FROM TWO CHAPTERS IS COUNTED ONCE, because it is recorded once and played wherever it appears; the letters are what the voice is handed rather than what the page spells, since that is what gets billed.";
  let chapter_codes = await app_original_bible_gloss_chapters_new_testament();
  let chapters = [];
  let seen = new Set();
  let characters = 0;
  for (let chapter_code of chapter_codes) {
    let m = await bible_word_voice_chapter_missing(chapter_code, voice_name);
    if (equal(m.missing, 0)) {
      continue;
    }
    let fresh = 0;
    for (let form of m.missing_words) {
      if (seen.has(form)) {
        continue;
      }
      seen.add(form);
      fresh = fresh + 1;
      let spoken = bible_word_speech_text(voice_name, form);
      characters = characters + [...spoken].length;
    }
    chapters.push({
      chapter_code,
      asked: m.asked,
      missing: m.missing,
      fresh,
    });
  }
  let r = {
    voice_name,
    chapters,
    words: seen.size,
    characters,
  };
  return r;
}
