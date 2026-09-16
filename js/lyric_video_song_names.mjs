import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { path_name } from "./path_name.mjs";
export async function lyric_video_song_names() {
  "The songs that have a timing document written for them, named the way a screen offers them and the way a reader asks for one back.";
  "THE NAMES ARE READ OFF THE DISK RATHER THAN LISTED ANYWHERE. A song arrives by somebody drafting a document for it, so a list kept by hand would be a second place that had to be remembered at exactly the moment nobody is thinking about lists.";
  "ONLY THE DOCUMENTS COUNT, NOT THE LYRIC FILES BESIDE THEM. Each song is a pair - the plain words it was drafted from and the document drafted out of them - and offering both would offer the same song twice, one of them a name nothing can be read back from.";
  "THE ENDING IS TAKEN OFF, because the name is what a person reads and what the reader is handed, and neither of those wants to know the documents are json.";
  arguments_assert(arguments, 0);
  let folder = lyric_video_songs_folder();
  let files = await folder_read_files_exists_ensure(folder);
  function document_is(file_name) {
    let ends = text_ends_with(file_name, ".json");
    return ends;
  }
  let documents = list_filter(files, document_is);
  let names = list_map(documents, path_name);
  return names;
}
