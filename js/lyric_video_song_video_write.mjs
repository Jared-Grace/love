import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { lyric_video_stale_write } from "./lyric_video_stale_write.mjs";
export async function lyric_video_song_video_write(name) {
  arguments_assert(arguments, 1);
  ("$plain name");
  ("Makes the lyric video of a song that is not a psalm, from its timing document as it stands, beside the song's recording - and only when there is no video there or the video is older than something it was made from.");
  ("★ IT RENDERS AND DOES NOTHING ELSE. The words are not heard again and not snapped to the melody again, so every word a person moved by hand stays exactly where they put it. Hearing the whole song again is what ",
    fn_name("lyric_video_song_melody_write"),
    " is for, and it throws those moves away.");
  ("★ IT GOES THROUGH THE SAME RENDER AS EVERY PSALM, ",
    fn_name("lyric_video_stale_write"),
    ". A song differs from a psalm only in where its recording is and what its video is called, so those two are worked out here and nothing else is.");
  ("★ WHERE THE RECORDING IS COMES FROM THE DOCUMENT, as audio. A psalm's recording is found by walking the download folder for its passage; a song has no passage to walk for, and its mastered file is called whatever its maker called it - so, like the Ardour session beside it, that is a fact only the maker has, written down once. A document that does not say is refused rather than guessed at.");
  ("THE VIDEO IS CALLED AFTER THE SONG'S TITLE, the name the document already gives it at the foot of every frame.");
  let folder = lyric_video_songs_folder();
  let path_document = path_join([folder, name + ".json"]);
  let document = await file_read_json(path_document);
  let path_audio = document.audio;
  if (equal(path_audio, undefined)) {
    error(
      "this song's document does not say where its recording is, as audio: " +
        name,
    );
  }
  let folder_audio = await path_dirname(path_audio);
  let path_output = path_join([
    folder_audio,
    document.passage + " lyric video.mp4",
  ]);
  let r = await lyric_video_stale_write(path_audio, path_document, path_output);
  return r;
}
