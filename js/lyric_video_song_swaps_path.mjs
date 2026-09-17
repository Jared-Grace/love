import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { path_join } from "./path_join.mjs";
export function lyric_video_song_swaps_path(name) {
  "$plain name";
  "Where one song's pictures on offer are kept, and the choices made among them.";
  arguments_assert(arguments, 1);
  let folder = lyric_video_songs_folder();
  let file_name = name + ".json";
  let path = path_join([folder, "swaps", file_name]);
  return path;
}
