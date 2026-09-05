import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_passage_text } from "./bible_usfm_version_passage_text.mjs";
export async function bible_usfm_version_passage_verses_text(
  version,
  book_code,
  chapter_number,
  verse_first,
  verse_last,
) {
  arguments_assert(arguments, 5);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain verse_first");
  ("$plain verse_last");
  ("Which part of a chapter this is, written the way the translation itself writes the chapter and the way readers everywhere write verses, as in Psalm 145:1-13a.");
  ("★ IT ASKS FOR THE CHAPTER'S OWN LABEL RATHER THAN SPELLING ONE, WHICH IS THE ONLY WAY THE TWO STAY IN STEP. The book names itself in its own file and the two shelves here disagree about whether it is Psalm or Psalms; a second place that worked that out would be free to work it out differently, and the disagreement would surface as two songs from one psalter labelled two ways on screen. So what is added here is the verses and nothing else.");
  ("★ THE COLON AND THE DASH ARE THE READER'S MARKS, NOT THE FILE SYSTEM'S. This is the line a watcher reads across the room, so it is written the way a person writes a reference rather than the way the document beside it is named; the address may put the verses after an underscore for as long as it likes without this having to follow.");
  ("A half verse keeps the letter the translation's own printing gives it, because that letter is the only honest way to say that the song stops in the middle of a verse. Rounding it to the whole verse would claim words the singing never reached.");
  let chapter = await bible_usfm_version_passage_text(
    version,
    book_code,
    chapter_number,
  );
  let passage = chapter + ":" + verse_first + "-" + verse_last;
  return passage;
}
