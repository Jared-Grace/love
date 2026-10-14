import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_document_name_take_is } from "./lyric_video_document_name_take_is.mjs";
import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { not_equal } from "./not_equal.mjs";
import { json_format_to_spaces_replaced } from "./json_format_to_spaces_replaced.mjs";
import { file_read } from "./file_read.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
import { path_base } from "./path_base.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function lyric_video_document_pictures_absent_remove(
  document_name,
) {
  arguments_assert(arguments, 1);
  ("Takes out of one superseded lyric video document every picture whose file is no longer on this machine, and says which ones it took.");
  ("★ IT REFUSES ANY DOCUMENT THAT IS NOT A SUPERSEDED TAKE, AND THAT REFUSAL IS THE WHOLE REASON IT IS SAFE TO RUN UNWATCHED. The same absence means opposite things in the two kinds of document: in a take the painting was swapped long ago and the old crop is gone for good, so naming it is a promise nothing can keep; in the version in use it means a crop still needs drawing, and taking the picture out there would quietly shorten a video nobody has rendered yet. Measured 2026-10-14, four Psalm 91 documents named one deleted crop and one of the four was the version in use - so a repair that trusted the caller to pass only takes would have damaged the live one on its first run.");
  ("★ THE FILE IS NOT WRITTEN UNLESS READING IT BACK AND WRITING IT OUT AGAIN WOULD HAVE CHANGED NOTHING. Every one of these documents is on a single line, while the writer this repo reaches for by default indents - so an ordinary save would reformat the whole file, and the change actually being made would be one entry hidden inside a diff of every line. Serialising the document exactly as it was read and demanding that byte-match the file is what turns this from a rewrite into a removal. It also catches the case the reformatting would have hidden: a document whose shape this function does not actually understand.");
  ("A document naming no absent picture is left completely alone rather than rewritten identically, because a write that changes nothing still takes the file in a commit and makes a peer read it to find out it says the same thing.");
  ("The picture is reported by its file's own base name rather than by the name the document gives it, because the thing that is gone is a file and that is the word somebody would search the disk for.");
  let take = lyric_video_document_name_take_is(document_name);
  if (not(take)) {
    error_json({
      hint: "this is the version in use rather than a superseded take, and a picture missing here means a crop still needs drawing - taking it out would shorten a video that was never broken. name a document ending in the take word and a number",
      document_name,
    });
  }
  let read = await lyric_video_documents_read();
  let held = null;
  for (let one of read) {
    if (not_equal(one.name, document_name)) {
      continue;
    }
    held = one;
  }
  if (not(held)) {
    error_json({
      hint: text_combine_multiple([
        "no lyric video document is filed under this name, so there is nothing to repair. ask ",
        fn_name("lyric_video_documents_read"),
        " for the names there are",
      ]),
      document_name,
    });
  }
  let json_read = json_format_to_spaces_replaced(held.document, 0, null);
  let text_disk = await file_read(held.path);
  if (not_equal(json_read, text_disk)) {
    error_json({
      hint: "writing this document back out would have changed more than the pictures being removed, so nothing was written. the document on the disk is not shaped the way this repair assumes, and whatever is different has to be understood before a picture is taken out of it",
      document_name,
      path: held.path,
    });
  }
  let authored = held.document.pictures;
  if (not(authored)) {
    let none = {
      document_name,
      path: held.path,
      removed: [],
      wrote: false,
    };
    return none;
  }
  let kept = [];
  let removed = [];
  for (let picture of authored) {
    let there = await file_exists(picture.path);
    if (there) {
      list_add(kept, picture);
      continue;
    }
    let item = path_base(picture.path);
    list_add(removed, item);
  }
  if (list_empty_is(removed)) {
    let clean = {
      document_name,
      path: held.path,
      removed: [],
      wrote: false,
    };
    return clean;
  }
  held.document.pictures = kept;
  let json_after = json_format_to_spaces_replaced(held.document, 0, null);
  await file_overwrite(held.path, json_after);
  let r = {
    document_name,
    path: held.path,
    removed,
    wrote: true,
  };
  return r;
}
