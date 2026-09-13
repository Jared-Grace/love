import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { bible_usfm_version_passage_text } from "./bible_usfm_version_passage_text.mjs";
import { bible_usfm_version_passage_verses_text } from "./bible_usfm_version_passage_verses_text.mjs";
export async function lyric_video_recording_passage_text(
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
  ("What the passage a recording sings is called on screen, whether the song is a whole chapter or a stanza of one.");
  ("★ AN EMPTY END MEANS THE WHOLE CHAPTER, WHICH IS THE SAME READING THE ADDRESS ALREADY USES. A caller holding a recording has two ends and does not want to have to know which of two labellers to call; asking that question in one place is what keeps a screen, a document and a video agreeing on what to call the passage.");
  ("Neither label is spelled here. The chapter names itself in the translation's own file and the verses are added by the function that exists for it, so what is decided here is only which of the two to ask.");
  let whole = equal(verse_first, "");
  if (whole) {
    let chapter = await bible_usfm_version_passage_text(
      version,
      book_code,
      chapter_number,
    );
    return chapter;
  }
  let passage = await bible_usfm_version_passage_verses_text(
    version,
    book_code,
    chapter_number,
    verse_first,
    verse_last,
  );
  return passage;
}
