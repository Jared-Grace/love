import { app_original_bible_gloss_chapters_new_testament } from "./app_original_bible_gloss_chapters_new_testament.mjs";
import { bible_word_voice_chapter_asked } from "./bible_word_voice_chapter_asked.mjs";
import { bible_word_voice_record_local } from "./bible_word_voice_record_local.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { add } from "./add.mjs";
export async function bible_word_voice_new_testament_write(voice_name) {
  "$plain voice_name";
  "Records every word a reader can tap in the published New Testament chapters that has no clip yet in one voice, onto this machine only, and reports how many were recorded and how many letters were sent to be said.";
  "IT SENDS NOTHING UP, so the whole batch goes to storage in one upload beside a new stamp rather than clip by clip ahead of it.";
  "EACH WORD IS ASKED AGAIN ON A FAILURE, because a run over the whole testament is thousands of requests and giving up on one hiccup would end it; a run that dies anyway is continued by starting it again, since a word already on disk is skipped.";
  let chapter_codes = await app_original_bible_gloss_chapters_new_testament();
  let recorded = 0;
  let characters = 0;
  for (let chapter_code of chapter_codes) {
    let forms = await bible_word_voice_chapter_asked(chapter_code);
    for (let form of forms) {
      async function asked() {
        let r2 = await bible_word_voice_record_local(voice_name, form);
        return r2;
      }
      let made = await retry_standard(asked);
      if (made) {
        recorded = add(recorded, 1);
        characters = add(characters, [...form].length);
      }
    }
  }
  let r = {
    voice_name,
    chapters: chapter_codes.length,
    recorded,
    characters_sent: characters,
  };
  return r;
}
