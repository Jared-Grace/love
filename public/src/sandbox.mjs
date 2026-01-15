import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { bible_audio_folder } from "../../../love/public/src/bible_audio_folder.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
import { image_generate } from "../../../love/public/src/image_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  const chapter_code = "SIR01";
  let f = bible_audio_folder(bible_folder, chapter_code);
  let files = await folder_read_files(f);
  let filtered = list_filter_ends_with(list, sufix);
  return files;
  await image_generate(text, path_output);
  return v;
}
