import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_part_lines_text } from "./lyric_video_part_lines_text.mjs";
import { null_is } from "./null_is.mjs";
import { bible_usfm_version_passage_verses_text } from "./bible_usfm_version_passage_verses_text.mjs";
import { bible_usfm_version_credit_text } from "./bible_usfm_version_credit_text.mjs";
import { lyric_video_document_draft_lines } from "./lyric_video_document_draft_lines.mjs";
export async function lyric_video_part_document_draft(
  version,
  book_code,
  chapter_number,
  verse_first,
  verse_last,
  path_audio,
  path_document,
) {
  arguments_assert(arguments, 7);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain verse_first");
  ("$plain verse_last");
  ("$plain path_audio");
  ("$plain path_document");
  ("Writes a first draft of the timing document for a song that sings part of one chapter - a stanza of Psalm 119, or half of Psalm 145 - with the verses it actually sings and no others.");
  ("★ IT THROWS RATHER THAN WRITING A DOCUMENT OVER THE WRONG WORDS. A range the printing has no such cut for is a passage nobody sang, and a draft written anyway would look exactly like a good one: a person would sit down and move its numbers onto the beats of a song whose words are not the ones on the cards. Refusing costs a message; guessing costs an evening of somebody's work.");
  ("The lines and the label are both asked for rather than worked out here, and the spread is the same one a whole chapter gets. What is left is only the joining, which is the whole of what makes a part different from a chapter.");
  let texts = await lyric_video_part_lines_text(
    version,
    book_code,
    chapter_number,
    verse_first,
    verse_last,
  );
  if (null_is(texts)) {
    throw new Error(
      "no such verses in the printing: " +
        book_code +
        " " +
        chapter_number +
        ":" +
        verse_first +
        "-" +
        verse_last,
    );
  }
  let passage = await bible_usfm_version_passage_verses_text(
    version,
    book_code,
    chapter_number,
    verse_first,
    verse_last,
  );
  let credit = bible_usfm_version_credit_text(version);
  let document = await lyric_video_document_draft_lines(
    passage,
    credit,
    texts,
    path_audio,
    path_document,
  );
  return document;
}
