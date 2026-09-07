import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_path } from "./lyric_video_bible_document_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
export async function lyric_video_bible_document_pictures(
  version,
  book_code,
  chapter_number,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "The background pictures one chapter's lyric video document asks for, named by the passage rather than by where the document sits.";
  "A PASSAGE WITH NO DOCUMENT YET IS AN EMPTY LIST AND NOT A FAILURE, and so is a document that names no pictures. Most of the Bible is in both of those states, and a screen that offered to open any chapter would otherwise refuse most of the chapters it offered.";
  "IT HANDS BACK THE PICTURES ALONE AND NOT THE WHOLE DOCUMENT. What asks is a page in a browser deciding which picture is behind the words at this second, and a chapter's lines with every word's timing on them are the large part of a document and no part of that question.";
  arguments_assert(arguments, 3);
  let path = lyric_video_bible_document_path(
    version,
    book_code,
    chapter_number,
  );
  let exists = await file_exists(path);
  let none = not(exists);
  if (none) {
    let empty = [];
    return empty;
  }
  let document = await file_read_json(path);
  let pictures = lyric_video_document_pictures(document);
  return pictures;
}
