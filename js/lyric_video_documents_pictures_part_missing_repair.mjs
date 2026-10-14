import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { lyric_video_documents_pictures_part_missing } from "./lyric_video_documents_pictures_part_missing.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { lyric_video_document_pictures_copy_part_write } from "./lyric_video_document_pictures_copy_part_write.mjs";
export async function lyric_video_documents_pictures_part_missing_repair() {
  arguments_assert(arguments, 0);
  ("Gives every singing of part of a passage that has no pictures the pictures the singing of the whole passage already has, and says afterwards which ones are still without.");
  ("★ IT FINDS ITS OWN SET AND ASKS AGAIN AFTERWARDS, so it cannot be handed a list that has gone stale and cannot claim a repair it did not make. Sixty part documents were found empty at once; a caller looping over a list of them would leave nothing behind and would have no single command to file the commit under.");
  ("A PART STILL LEFT WITHOUT PICTURES IS REPORTED, NOT THROWN OVER. The copy is refused when the part's lines are not word for word the whole's, which happens when either singing split a line, and that is a real answer about the documents rather than a fault here.");
  await ai_git_noted();
  let found = await lyric_video_documents_pictures_part_missing();
  let names = [];
  let refused = [];
  for (let one of found) {
    let written = await function_call_commit(
      lyric_video_document_pictures_copy_part_write,
      [one.path_whole, one.path],
    );
    if (written.written) {
      names.push(one.name);
    } else {
      refused.push(one.name);
    }
  }
  let left = await lyric_video_documents_pictures_part_missing();
  let names_left = [];
  for (let one of left) {
    names_left.push(one.name);
  }
  let r = {
    written: names.length,
    names,
    refused,
    left: names_left,
  };
  return r;
}
