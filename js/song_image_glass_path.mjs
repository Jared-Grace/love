import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { song_image_couplets_hash_name } from "./song_image_couplets_hash_name.mjs";
import { path_join } from "./path_join.mjs";
export function song_image_glass_path(key, folder_suffix) {
  "$plain key";
  "$plain folder_suffix";
  "Where a couplet's stained-glass picture sits in one of the hymn's folders beside its lyric video, named after the couplet's key.";
  "THE FOLDER IS NAMED BY ITS SUFFIX, because the hymn's stained glass is spread over several of them - the first drawing, the paid redraws, and the sharpened copies the video was made from - and every one of them names its pictures by the same key.";
  arguments_assert(arguments, 2);
  let folder = lyric_video_songs_folder();
  let song_name = song_image_couplets_hash_name();
  let folder_name = song_name + "_" + folder_suffix;
  let name = String(key) + ".png";
  let path = path_join([folder, folder_name, name]);
  return path;
}
