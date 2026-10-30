import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { not } from "./not.mjs";
import { lyric_video_document_name_take_is } from "./lyric_video_document_name_take_is.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
export async function lyric_video_documents_pictures_take_missing() {
  arguments_assert(arguments, 0);
  ("Every other take of a song that has no pictures at all while the song's first take does have them, named beside the document it could take them from.");
  ("★ THE FIRST TAKE IS FOUND BY TAKING THE TAKE WORD OFF THE NAME, BECAUSE THAT WORD IS THE ONLY MARK OF WHICH SINGING CAME FIRST. Psalm 106:1-12 take 1 is filed as the name of Psalm 106:1-12 with _take1 on the end; nothing inside either document says they are the same song.");
  ("★ A TAKE WITHOUT PICTURES RENDERS AS WORDS ON BLACK, AND NOTHING SAYS SO. The render succeeds, the upload succeeds, and only a look at the frames shows it. Measured 2026-10-30: thirty takes of Psalms 100 to 106 held no pictures while their first takes did.");
  ("A DOCUMENT HOLDING EVEN ONE PICTURE IS LEFT ALONE, because a document somebody has begun is a choice already made.");
  let read = await lyric_video_documents_read();
  let by_name = {};
  for (let one of read) {
    by_name[one.name] = one;
  }
  let missing = [];
  for (let one of read) {
    let b = lyric_video_document_name_take_is(one.name);
    if (not(b)) {
      continue;
    }
    let pictures = lyric_video_document_pictures(one.document);
    if (greater_than(pictures.length, 0)) {
      continue;
    }
    let name_first = one.name.replace(/_take[0-9]+$/, "");
    let first = by_name[name_first];
    if (equal(first, undefined)) {
      continue;
    }
    let pictures_first = lyric_video_document_pictures(first.document);
    if (equal(pictures_first.length, 0)) {
      continue;
    }
    let one_missing = {
      name: one.name,
      path: one.path,
      name_first,
      path_first: first.path,
    };
    missing.push(one_missing);
  }
  return missing;
}
