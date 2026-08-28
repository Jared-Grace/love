import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
export function data_given_lyric_videos_folder() {
  "Where the timing documents of lyric videos are kept, in the given half of the data folder.";
  "One place saying it, so that a move is one edit here rather than a hunt for every spelling of the room.";
  arguments_assert(arguments, 0);
  let given = data_given_folder();
  let v = path_join([given, "lyric_videos"]);
  return v;
}
