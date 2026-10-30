import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { lyric_video_documents_pictures_take_missing } from "./lyric_video_documents_pictures_take_missing.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { lyric_video_document_pictures_copy_write } from "./lyric_video_document_pictures_copy_write.mjs";
import { greater_than } from "./greater_than.mjs";
export async function lyric_video_documents_pictures_take_missing_repair() {
  arguments_assert(arguments, 0);
  ("Gives every other take of a song that has no pictures the pictures the song's first take already has, each on the same line of words, and says afterwards which ones are still without.");
  ("★ IT FINDS ITS OWN SET AND ASKS AGAIN AFTERWARDS, so it cannot be handed a list that has gone stale and cannot claim a repair it did not make.");
  ("★ A COPY COUNTS AS WRITTEN ONLY WHEN THE COPY NAMES THE TAKE AMONG WHAT IT WROTE. The copy answers with two lists, and a list is there whether or not anything is in it, so asking whether the answer holds a list would call every refusal a success.");
  ("A TAKE STILL LEFT WITHOUT PICTURES IS REPORTED, NOT THROWN OVER. The copy is refused when a pinned line's words differ between the takes, which is a real answer about the documents rather than a fault here.");
  await ai_git_noted();
  let found = await lyric_video_documents_pictures_take_missing();
  let names = [];
  let refused = [];
  for (let one of found) {
    let copied = await function_call_commit(
      lyric_video_document_pictures_copy_write,
      [one.path_first, one.path],
    );
    if (greater_than(copied.written.length, 0)) {
      names.push(one.name);
    } else {
      refused.push(one.name);
    }
  }
  let left = await lyric_video_documents_pictures_take_missing();
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
