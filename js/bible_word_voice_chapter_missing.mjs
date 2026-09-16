import { bible_word_voice_chapter_asked } from "./bible_word_voice_chapter_asked.mjs";
import { bible_word_voice_path } from "./bible_word_voice_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
export async function bible_word_voice_chapter_missing(
  chapter_code,
  voice_name,
) {
  "$plain chapter_code";
  "$plain voice_name";
  "The words a reader can tap in one chapter of the original-language Bible that have no clip recorded for them, so tapping does nothing.";
  "IT ASKS THE PAGE'S OWN WORDS AND NOT THE INTERLINEAR, because the two are different readings of the same chapter and only the first is what a finger actually lands on; a word the page shows and the recorder never saw is silent, and silence is the one failure that never reports itself.";
  let asked = await bible_word_voice_chapter_asked(chapter_code);
  let missing = [];
  for (let form of asked) {
    let path = bible_word_voice_path(voice_name, form);
    let file_path = web_assets_folder_join(path);
    let there = await file_exists(file_path);
    if (not(there)) {
      missing.push(form);
    }
  }
  let r = {
    chapter_code,
    voice_name,
    asked: asked.length,
    missing: missing.length,
    missing_words: missing,
  };
  return r;
}
