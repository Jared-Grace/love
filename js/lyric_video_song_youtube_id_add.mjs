import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_song_youtube_id_add(name, id) {
  "record on disk the youtube id a song's video was published under, adding it to that song's own timing document";
  "★ AN ID ON SOMEONE ELSE'S SERVER IS THE ONE FACT NOTHING HERE WRITES DOWN. The bytes of a published video live on youtube and the repo holds no trace of them, so the id survives only in whoever remembers it. Carried in a conversation it reads like a fact rather than like a measurement, because an identifier has no verb in it, and a measurement nobody wrote down decays into hearsay. On 2026-09-19 an id carried that way named a video youtube says does not exist, and was twice offered as something to delete.";
  "★ IT KEEPS A LIST AND NEVER ONE VALUE, BECAUSE A SONG IS PUBLISHED MORE THAN ONCE. A re-upload replaces the video people watch but not the video that existed, and a field holding one id loses the earlier one at exactly the moment the earlier one starts mattering, which is when someone has to go and take it down. The list is in the order they were published, so the last one is the current one.";
  "Adding an id already in the list changes nothing and says so, so it is safe to run again when nobody remembers whether it was run.";
  let folder = lyric_video_songs_folder();
  let file_name = text_combine(name, ".json");
  let path_document = path_join([folder, file_name]);
  let document = await file_read_json(path_document);
  let ids = document.youtube_ids;
  if (equal(ids, undefined)) {
    ids = [];
  }
  let held = ids.includes(id);
  if (held) {
    let r2 = {
      name,
      id,
      added: false,
      youtube_ids: ids,
    };
    return r2;
  }
  ids.push(id);
  document.youtube_ids = ids;
  await file_overwrite_json(path_document, document);
  let r = {
    name,
    id,
    added: true,
    youtube_ids: ids,
  };
  return r;
}
