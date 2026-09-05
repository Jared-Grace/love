import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { file_content_type } from "./file_content_type.mjs";
import { cache_control_asset_value } from "./cache_control_asset_value.mjs";
import { firebase_upload_settings } from "./firebase_upload_settings.mjs";
import { list_map } from "./list_map.mjs";
import { list_wait } from "./list_wait.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_words_sound_upload_generic(sound_fn, path_get) {
  "Sends every recording of a single word up to storage, so a reader's phone can fetch the one it needs.";
  "★ IT SENDS ALL OF THEM AND NOT THE NEW ONES, WHICH IS WHAT MAKES IT SAFE TO RUN AT ANY MOMENT. Writing a file that is already there leaves it as it was, so there is nothing to work out beforehand and no state that can be wrong. Working out which ones changed would need a record of what went up last time, and a record like that is wrong the first time anything happens outside it.";
  "They go up a handful at a time rather than all at once, because several hundred writes opened together is how a run ends in refusals rather than in files.";
  "Each one is written in a single go rather than resumably, for the same reason the pictures are: storage otherwise opens a handshake-then-bytes-then-finish session for every file, which is the wrong shape for something a few kilobytes long, and thirty-two of those at once is what a run of them looks like here.";
  "Each is described as the sound it is rather than left as a run of bytes, because a phone shown bytes offers to save the file instead of playing it - so the recording arrives whole and still nothing is heard.";
  arguments_assert(arguments, 2);
  let folder = local_function_folder(sound_fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  function sound_is(name) {
    let is = text_ends_with(name, ".mp3");
    return is;
  }
  let sounds = list_filter(file_names, sound_is);
  async function sound_each(name) {
    let file_path = path_join([folder, name]);
    let buffer = await file_read_buffer(file_path);
    let destination = path_get(name);
    let content_type = file_content_type(name);
    let cache_control = cache_control_asset_value();
    let settings = {
      contentType: content_type,
      resumable: false,
      metadata: {
        contentType: content_type,
        cacheControl: cache_control,
      },
    };
    await firebase_upload_settings(destination, settings, buffer);
  }
  async function chunk_each(chunk) {
    let promises = list_map(chunk, sound_each);
    await list_wait(promises);
  }
  let at_once = 32;
  let chunks = list_chunk(sounds, at_once);
  await each_async(chunks, chunk_each);
  let r = {
    uploaded: list_size(sounds),
  };
  return r;
}
