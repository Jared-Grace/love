import { fn_name } from "./fn_name.mjs";
import { bible_word_voice_chapter_asked } from "./bible_word_voice_chapter_asked.mjs";
import { bible_word_voice_record } from "./bible_word_voice_record.mjs";
import { add } from "./add.mjs";
export async function bible_chapter_voice_record(chapter_code, voice_name) {
  "$plain chapter_code";
  "$plain voice_name";
  "Records every different word of one chapter, said by one voice, into the assets folder, and reports how many words there were, how many were recorded here and how many letters were sent to be said.";
  ("IT RECORDS WHAT THE PAGE ASKS FOR, word for word, so that ",
    fn_name("bible_word_voice_chapter_missing"),
    " comes back empty afterwards; recording the interlinear instead left every gloss that explains two words together with no clip at all.");
  ("WORDS ALREADY RECORDED BY AN EARLIER CHAPTER ARE SKIPPED, so the second run over a book costs only what is new, and the reported letters are what this run is charged for rather than what the chapter holds.");
  let forms = await bible_word_voice_chapter_asked(chapter_code);
  let recorded = 0;
  let characters = 0;
  for (let form of forms) {
    let made = await bible_word_voice_record(voice_name, form);
    if (made) {
      recorded = add(recorded, 1);
      characters = add(characters, [...form].length);
    }
  }
  let r = {
    chapter_code,
    voice_name,
    words: forms.length,
    recorded,
    characters_sent: characters,
  };
  return r;
}
