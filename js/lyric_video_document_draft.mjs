import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_usfm_version_passage_text } from "./bible_usfm_version_passage_text.mjs";
import { bible_usfm_version_credit_text } from "./bible_usfm_version_credit_text.mjs";
import { lyric_video_lines_text } from "./lyric_video_lines_text.mjs";
import { lyric_video_document_draft_lines } from "./lyric_video_document_draft_lines.mjs";
export async function lyric_video_document_draft(
  version,
  book_code,
  chapter_number,
  path_audio,
  path_document,
) {
  arguments_assert(arguments, 5);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain path_audio");
  ("$plain path_document");
  ("Writes a first draft of the timing document a lyric video is made from: a whole chapter in the translation asked for, one line at a time, with a start and an end for each one.");
  ("Where the lines break is not decided here; ",
    fn_name("lyric_video_lines_text"),
    " is asked, and it says why.");
  ("How the times are spread is not decided here either; ",
    fn_name("lyric_video_document_draft_lines"),
    " is asked, and a part of a chapter asks the same one.");
  let passage = await bible_usfm_version_passage_text(
    version,
    book_code,
    chapter_number,
  );
  let credit = bible_usfm_version_credit_text(version);
  let texts = await lyric_video_lines_text(version, book_code, chapter_number);
  let document = await lyric_video_document_draft_lines(
    passage,
    credit,
    texts,
    path_audio,
    path_document,
  );
  return document;
}
