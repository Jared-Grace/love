import { app_original_bible_gloss_generate_download } from "./app_original_bible_gloss_generate_download.mjs";
import { json_from } from "./json_from.mjs";
import { bible_word_form } from "./bible_word_form.mjs";
import { equal } from "./equal.mjs";
export async function bible_word_voice_chapter_asked(chapter_code) {
  "$plain chapter_code";
  "Every different word a reader can tap in one chapter of the original-language Bible, each cut back to the form that gets said, in the order the chapter reaches them.";
  "THIS IS THE PAGE'S OWN LIST AND NOT THE INTERLINEAR'S, because only these are what a finger lands on: a word the page shows and the recorder never saw is silent, and silence is the one failure that never reports itself.";
  "Some of them are two or three words the gloss explained together, kept whole, because that is the unit the reader is being taught.";
  let chapter = await app_original_bible_gloss_generate_download(chapter_code);
  let asked = [];
  let seen = new Set();
  for (let passage of chapter.passages) {
    let explains = json_from(passage.generated);
    for (let e of explains) {
      let form = bible_word_form(e.word);
      if (equal(form, "") || seen.has(form)) {
        continue;
      }
      seen.add(form);
      asked.push(form);
    }
  }
  return asked;
}
