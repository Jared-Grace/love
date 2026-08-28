import { bible_audio_recording_translation } from "./bible_audio_recording_translation.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_chapter_aligned_is } from "./bible_audio_chapter_aligned_is.mjs";
import { bible_audio_chunk_texts } from "./bible_audio_chunk_texts.mjs";
import { ebible_chapter_reading_units } from "./ebible_chapter_reading_units.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function bible_audio_chapter_verses_stale(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Which pieces of one recorded chapter were spoken from words the translation no longer has, found by reading back what was actually said and comparing it to what the chapter says today.";
  "★ THE RECORDING CARRIES ITS OWN SOURCE, WHICH IS WHY A TRANSLATION UPDATE NEED NOT THROW THE RECORDING AWAY. The engine writes the words of each piece beside the sound of it, so the disk already holds the text every file was read from. Comparing that to the chapter as it stands now turns a new edition from a reason to re-record a whole bible into a list of pieces to re-record, and those lists are short - a revision moves a handful of verses per book, not every one of them.";
  "★ IT COMPARES THE SPOKEN WORDS AND NEVER A VERSION NUMBER. A stamp saying which edition a recording came from would answer a different and weaker question: it would name every chapter of the old edition as suspect, including the thousands the revision never touched. The words themselves say which pieces moved, and they say it for a recording made before anybody thought to stamp one.";
  "★ THE COMPARISON IS AGAINST THE READING PIECES AND NOT AGAINST THE VERSES, BECAUSE THAT IS HOW THE SOUND WAS CUT. A piece runs forward from where the last one ended to where a reader may stop, so a chapter with one sentence spanning three verses holds one piece where a verse-by-verse comparison expects three. Comparing to verses would report every gathered piece as changed in a recording where nothing changed at all.";
  "★ A RECORDING CUT SOME OTHER WAY CANNOT BE COMPARED AT ALL, AND SAYS SO RATHER THAN REPORTING NOTHING WRONG. Piece three of such a recording holds no particular piece of the chapter, so a comparison against piece three would report a difference on every line. Reporting that it cannot be judged points at re-cutting the chapter, which is the true answer for it.";
  "★ THE SHAPE IS CHECKED AGAIN HERE RATHER THAN TAKEN FROM THE NOTE. The note was written when the recording was, and the chapter may have been revised since in a way that changes how many pieces it gathers into. Trusting the old verdict would then walk off the end of the pieces, so the count is asked of what is on disk right now and the note's verdict is only reported.";
  "★ THE FOLDER OF RECORDINGS IS NOT ALWAYS NAMED FOR A TRANSLATION, SO ITS NAME IS RESOLVED BEFORE THE CHAPTER IS ASKED FOR. A run recorded at full speed sits in a folder called engwebu_full_speed, and asking for a translation by that name is refused, so the comparison could not be made at all for it.";
  arguments_assert(arguments, 2);
  let aligned = await bible_audio_chapter_aligned_is(
    bible_folder,
    chapter_code,
  );
  let chunks = await bible_audio_chunk_texts(bible_folder, chapter_code);
  let translation = await bible_audio_recording_translation(bible_folder);
  let units = await ebible_chapter_reading_units(translation, chapter_code);
  let stale = [];
  let report = {
    bible_folder,
    chapter_code,
    aligned,
    comparable: false,
    reason:
      "the recording is not cut the way this chapter gathers into reading pieces",
    chunks: chunks.length,
    units: units.length,
    stale,
  };
  if (not(aligned)) {
    return report;
  }
  let counted = equal(chunks.length, units.length);
  if (not(counted)) {
    report.reason =
      "the chapter gathers into a different number of pieces than it did when it was read";
    return report;
  }
  report.comparable = true;
  report.reason = "";
  let index = 0;
  function chunk_each(chunk) {
    let unit = units[index];
    index = add(index, 1);
    let spoken = property_get(chunk, "text");
    let now = property_get(unit, "text");
    let left = text_trim(spoken);
    let right = text_trim(now);
    let same = equal(left, right);
    if (same) {
      return;
    }
    let row = {
      chunk: property_get(chunk, "chunk"),
      verse_numbers: property_get(unit, "verse_numbers"),
      spoken,
      now,
    };
    list_add(stale, row);
  }
  each(chunks, chunk_each);
  return report;
}
