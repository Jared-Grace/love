import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
import { bible_speech_spans_chapter } from "./bible_speech_spans_chapter.mjs";
import { each } from "./each.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function bible_speech_share_bible(bible_folder) {
  "$plain bible_folder";
  "How much of the whole bible is somebody speaking inside quotation marks and how much is the book's own voice, counted in characters rather than in quotations.";
  "★ IT COUNTS CHARACTERS AND NOT QUOTATIONS, BECAUSE THE QUESTION IT ANSWERS IS ABOUT RECORDING TIME. Six thousand quotations says nothing about how long they take to say; the Sermon on the Mount is a handful of quotations and an hour of speech, and a crowd shouting one word is a quotation too. What a cast costs to generate is proportional to how many characters each voice has to say, so that is what is measured.";
  "★ EVERY DEPTH ABOVE ZERO COUNTS AS SPEECH RATHER THAN ONLY DEPTH ONE, BECAUSE A QUOTER KEEPS HIS VOICE. A quotation inside a quotation is still the outer speaker talking, so it is his characters, and it must not fall back to the narrator merely for being nested deeper.";
  arguments_assert(arguments, 1);
  let book_codes = ebible_book_codes();
  let narration = 0;
  let speech = 0;
  let chapters = 0;
  async function book_each(book_code) {
    let chapter_codes = await ebible_book_code_to_chapter_codes(
      bible_folder,
      book_code,
    );
    async function chapter_each(chapter_code) {
      let spans = await bible_speech_spans_chapter(bible_folder, chapter_code);
      function span_each(span) {
        if (span.depth) {
          speech = speech + span.text.length;
          return;
        }
        narration = narration + span.text.length;
      }
      each(spans, span_each);
      chapters = chapters + 1;
    }
    await list_map_async(chapter_codes, chapter_each);
  }
  await list_map_async(book_codes, book_each);
  let characters = narration + speech;
  let report = {
    bible_folder,
    chapters,
    characters,
    narration_characters: narration,
    speech_characters: speech,
    speech_share: divide(speech, characters),
  };
  return report;
}
