import { list_join } from "../../../love/public/src/list_join.mjs";
import { string_suffix_without } from "../../../love/public/src/string_suffix_without.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { bible_audio_folder } from "../../../love/public/src/bible_audio_folder.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
import { image_generate } from "../../../love/public/src/image_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  const chapter_code = "SIR01";
  let folder_path = bible_audio_folder(bible_folder, chapter_code);
  let files = await folder_read_files(folder_path);
  const suffix = ".txt";
  let filtered = list_filter_ends_with(list, suffix);
  async function lambda(file_path) {
    let contents = await file_read(file_path);
    let sw = string_suffix_without(file_path, suffix);
    let joined = list_join(list2, separator);
  }
  await each_async(filtered, lambda);
  return files;
  await image_generate(text, path_output);
  return v;
}
