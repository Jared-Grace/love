import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_times_hand_is } from "./lyric_video_document_times_hand_is.mjs";
import { not } from "./not.mjs";
import { path_name } from "./path_name.mjs";
export async function lyric_video_documents_hand_named() {
  arguments_assert(arguments, 0);
  ("Every timing document whose moments a person put there, each with the name it is filed under and everything it holds.");
  ("★ THE WHOLE DOCUMENT TRAVELS AND NOT JUST ITS MOMENTS, BECAUSE A LIST OF NUMBERS WITH NOTHING BESIDE IT CANNOT BE PUT BACK. Times mean nothing without the lines they belong to and the length of the song they were heard against; a copy that leaves those behind is a copy somebody has to reconstruct before they can use it, on the worst day to be reconstructing anything.");
  ("Whose work the moments are is asked of one function and answered the same way everywhere, so a document that is safe from being written over is exactly a document that gets kept, and neither list can drift from the other.");
  let folder = data_given_lyric_videos_folder();
  let paths = await folder_read_paths_async(folder);
  let paths_json = list_filter_ends_with(paths, ".json");
  let hand = [];
  for (let path of paths_json) {
    let document = await file_read_json(path);
    let person = lyric_video_document_times_hand_is(document);
    if (not(person)) {
      continue;
    }
    let one = {
      name: path_name(path),
      path,
      document,
    };
    hand.push(one);
  }
  return hand;
}
