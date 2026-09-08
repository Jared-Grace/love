import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function lyric_video_bible_document_read(
  version,
  book_code,
  chapter_number,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "The whole lyric video document for one chapter, named by the passage rather than by where the document sits, and nothing at all when that passage has no document yet.";
  "A PASSAGE WITH NO DOCUMENT YET IS AN ANSWER AND NOT A FAILURE. Most of the Bible is in that state, and a screen that offered to open any chapter would otherwise refuse most of the chapters it offered.";
  "IT HANDS BACK THE WHOLE DOCUMENT RATHER THAN ONE PART OF IT. This replaced a reader that handed back the pictures alone, on the reasoning that a chapter's lines are the large part of a document and no part of the question. Measured, they are not: Psalm 148 is thirty-two lines of a few words each with a start and an end, against thirteen pictures each carrying a paragraph of prose describing what to draw. The pictures are the larger half, and a reviewer looking at a drawing needs the words it was drawn for standing beside it - so splitting the document in two bought nothing and cost a second round trip on a phone.";
  arguments_assert(arguments, 3);
  let path = lyric_video_bible_document_path(
    version,
    book_code,
    chapter_number,
  );
  let exists = await file_exists(path);
  let none = not(exists);
  if (none) {
    let nothing = null;
    return nothing;
  }
  let document = await file_read_json(path);
  return document;
}
