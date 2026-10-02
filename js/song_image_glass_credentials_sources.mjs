import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { song_image_couplets_hash_name } from "./song_image_couplets_hash_name.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function song_image_glass_credentials_sources() {
  "Which folder holds the original drawing of each couplet's stained-glass picture, as the suffix of the folder's name, keyed by the couplet's key - read from the list kept beside the hymn's lyric video.";
  "IT IS A LIST SOMEBODY WROTE AND NOT SOMETHING WORKED OUT, because the picture in the video is rarely the drawing as it arrived. Most were lightened or recoloured after they were drawn, and that step threw away the content credentials the terms these pictures are drawn under forbid dropping. Which drawing each one came from was settled once, by how closely each tuned picture still resembles each candidate and then by eye, and a rule could not replace that: one couplet has a paid redraw it does not come from, beside the first drawing it does.";
  "THE LIST LIVES WITH THE PICTURES, out of the repo, because the folders it names are there too and neither half means anything without the other.";
  arguments_assert(arguments, 0);
  let folder = lyric_video_songs_folder();
  let song_name = song_image_couplets_hash_name();
  let path = path_join([folder, song_name + "_credentials.json"]);
  let sources = await file_read_json(path);
  return sources;
}
