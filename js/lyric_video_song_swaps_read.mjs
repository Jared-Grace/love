import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function lyric_video_song_swaps_read(name) {
  "$plain name";
  "The pictures offered to take the place of pictures already in one song, each current picture named by its path beside the candidates for it, and nothing at all when that song has none on offer.";
  "THEY SIT IN A FOLDER BESIDE THE SONG DOCUMENTS AND NOT AMONG THEM, because every json file among them is offered as a song, and a list of candidates is not a song.";
  "A CANDIDATE IS NOT WRITTEN INTO THE DOCUMENT, because the document is what the render reads, and a picture nobody has chosen yet must not reach a video.";
  arguments_assert(arguments, 1);
  let folder = lyric_video_songs_folder();
  let file_name = name + ".json";
  let path = path_join([folder, "swaps", file_name]);
  let exists = await file_exists(path);
  let none = not(exists);
  if (none) {
    let nothing = null;
    return nothing;
  }
  let swaps = await file_read_json(path);
  return swaps;
}
