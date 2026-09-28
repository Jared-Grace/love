import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_chapters_uploaded } from "./app_original_bible_gloss_chapters_uploaded.mjs";
import { bible_word_voice_chapter_asked } from "./bible_word_voice_chapter_asked.mjs";
import { bible_word_voice_name } from "./bible_word_voice_name.mjs";
import { bible_word_voice_path } from "./bible_word_voice_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { file_exists } from "./file_exists.mjs";
export async function bible_word_voice_uploaded_missing() {
  "How many different words a reader can tap in the published chapters still have no clip on this machine in the voice the page will ask for, counted per voice with the letters each would send, so a recording run can be priced before it is started.";
  "★ A WORD IS COUNTED ONCE HOWEVER MANY CHAPTERS HOLD IT, because its clip is named after the word and serves every chapter; counting per chapter would price the same recording many times.";
  arguments_assert(arguments, 0);
  let chapter_codes = await app_original_bible_gloss_chapters_uploaded();
  let seen = new Set();
  let voices = {};
  for (let chapter_code of chapter_codes) {
    let forms = await bible_word_voice_chapter_asked(chapter_code);
    for (let form of forms) {
      if (seen.has(form)) {
        continue;
      }
      seen.add(form);
      let voice_name = bible_word_voice_name(form);
      let path = bible_word_voice_path(voice_name, form);
      let file_path = web_assets_folder_join(path);
      if (await file_exists(file_path)) {
        continue;
      }
      let v = (voices[voice_name] ??= {
        words: 0,
        characters: 0,
      });
      v.words = v.words + 1;
      v.characters = v.characters + [...form].length;
    }
  }
  let r = {
    chapters: chapter_codes.length,
    voices,
  };
  return r;
}
