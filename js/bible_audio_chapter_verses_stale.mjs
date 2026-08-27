import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_chapter_aligned_is } from "./bible_audio_chapter_aligned_is.mjs";
import { bible_audio_chunk_texts } from "./bible_audio_chunk_texts.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function bible_audio_chapter_verses_stale(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Which verses of one recorded chapter were spoken from words the translation no longer has, found by reading back what was actually said and comparing it to what the chapter says today.";
  "★ THE RECORDING CARRIES ITS OWN SOURCE, WHICH IS WHY A TRANSLATION UPDATE NEED NOT THROW THE RECORDING AWAY. The engine writes the words of each piece beside the sound of it, so the disk already holds the text every file was read from. Comparing that to the chapter as it stands now turns a new edition from a reason to re-record a whole bible into a list of verses to re-record, and those lists are short - a revision moves a handful of verses per book, not every one of them.";
  "★ IT COMPARES THE SPOKEN WORDS AND NEVER A VERSION NUMBER. A stamp saying which edition a recording came from would answer a different and weaker question: it would name every chapter of the old edition as suspect, including the thousands the revision never touched. The words themselves say which verses moved, and they say it for a recording made before anybody thought to stamp one.";
  "★ A RECORDING THAT WAS NEVER CUT BY VERSE CANNOT BE COMPARED AT ALL, AND SAYS SO RATHER THAN REPORTING NOTHING WRONG. Those were cut wherever the engine's own chunking landed, so piece three holds no particular verse and a comparison against verse three would report a difference on every line. Reporting that it cannot be judged points at re-recording the chapter, which is the true answer for it.";
  arguments_assert(arguments, 2);
  let aligned = await bible_audio_chapter_aligned_is(
    bible_folder,
    chapter_code,
  );
  let chunks = await bible_audio_chunk_texts(bible_folder, chapter_code);
  let verses = await ebible_verses(bible_folder, chapter_code);
  let stale = [];
  let report = {
    bible_folder,
    chapter_code,
    aligned,
    comparable: false,
    reason: "the recording was never cut one verse to a piece",
    chunks: chunks.length,
    verses: verses.length,
    stale,
  };
  if (not(aligned)) {
    return report;
  }
  let counted = equal(chunks.length, verses.length);
  if (not(counted)) {
    report.reason =
      "the chapter holds a different number of verses than it did when it was read";
    return report;
  }
  report.comparable = true;
  report.reason = "";
  let index = 0;
  function chunk_each(chunk) {
    let verse = verses[index];
    index = add(index, 1);
    let spoken = property_get(chunk, "text");
    let now = property_get(verse, "text");
    let same = equal(spoken, now);
    if (same) {
      return;
    }
    let row = {
      chunk: property_get(chunk, "chunk"),
      verse_number: property_get(verse, "verse_number"),
      spoken,
      now,
    };
    list_add(stale, row);
  }
  each(chunks, chunk_each);
  return report;
}
