import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_song_audio_set(name, path_audio) {
  arguments_assert(arguments, 2);
  ("$plain name");
  ("$plain path_audio");
  ("Writes into a song's timing document where its recording is, which the render needs and nothing else can work out.");
  ("★ A SONG'S RECORDING IS CALLED WHATEVER ITS MAKER CALLED IT, so it is written down once, by the person who knows, rather than searched for. The render refuses a document that does not say.");
  let folder = lyric_video_songs_folder();
  let path_document = path_join([folder, name + ".json"]);
  let document = await file_read_json(path_document);
  document.audio = path_audio;
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    audio: path_audio,
  };
  return r;
}
