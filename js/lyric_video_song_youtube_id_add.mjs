import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { lyric_video_document_youtube_id_add } from "./lyric_video_document_youtube_id_add.mjs";
export async function lyric_video_song_youtube_id_add(name, id) {
  "record on disk the youtube id a song's video was published under, adding it to that song's own timing document";
  "The recording itself, and why it keeps a list, is the document form's; what is a song's own is only which folder its document is in.";
  let folder = lyric_video_songs_folder();
  let file_name = text_combine(name, ".json");
  let path_document = path_join([folder, file_name]);
  let added = await lyric_video_document_youtube_id_add(path_document, id);
  let r = {
    name,
    id,
    added: added.added,
    youtube_ids: added.youtube_ids,
  };
  return r;
}
