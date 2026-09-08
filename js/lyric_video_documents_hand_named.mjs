import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { lyric_video_document_times_hand_is } from "./lyric_video_document_times_hand_is.mjs";
import { not } from "./not.mjs";
export async function lyric_video_documents_hand_named() {
  "Every timing document whose moments a person put there, each with the name it is filed under and everything it holds.";
  "★ THE WHOLE DOCUMENT TRAVELS AND NOT JUST ITS MOMENTS, BECAUSE A LIST OF NUMBERS WITH NOTHING BESIDE IT CANNOT BE PUT BACK. Times mean nothing without the lines they belong to and the length of the song they were heard against; a copy that leaves those behind is a copy somebody has to reconstruct before they can use it, on the worst day to be reconstructing anything.";
  "Whose work the moments are is asked of one function and answered the same way everywhere, so a document that is safe from being written over is exactly a document that gets kept, and neither list can drift from the other.";
  "READING THE FOLDER IS NOT DONE HERE, because every question asked of these documents opens the same folder and keeping one copy of that is what stops a filtered reading quietly reporting a smaller folder than the folder.";
  arguments_assert(arguments, 0);
  let read = await lyric_video_documents_read();
  let hand = [];
  for (let held of read) {
    let person = lyric_video_document_times_hand_is(held.document);
    if (not(person)) {
      continue;
    }
    hand.push(held);
  }
  return hand;
}
