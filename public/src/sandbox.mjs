import { file_exists_not } from "../../../love/public/src/file_exists_not.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { video_generate } from "../../../love/public/src/video_generate.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { string_suffix_without } from "../../../love/public/src/string_suffix_without.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { bible_audio_folder } from "../../../love/public/src/bible_audio_folder.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
import { image_generate } from "../../../love/public/src/image_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_temp } from "./file_temp.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  const chapter_code = "SIR01";
  let folder_path = bible_audio_folder(bible_folder, chapter_code);
  let files = await folder_read_files(folder_path);
  const suffix = ".txt";
  let filtered = list_filter_ends_with(files, suffix);
  async function lambda2(la) {
    async function lambda(file_path) {
      let joined_text = path_join([folder_path, file_path]);
      let contents = await file_read(joined_text);
      let sw = string_suffix_without(file_path, suffix);
      let joined = path_join([folder_path, sw]);
      let joined_image = joined + ".png";
      const n = await file_exists_not(joined_image);
      if (n) {
        await image_generate(contents, joined_image);
      }
      let joined_video = joined + ".mp4";
      let n2 = await file_exists_not(joined_video);
      if (n2) {
        let joined_audio = joined + ".wav";
        await video_generate(joined_image, joined_audio, joined_video);
      }
      la(joined_video);
    }
    await each_async(filtered, lambda);
  }
  let list = await list_adder_async(lambda2);
  async function lambda3(temp_path) {}
  let result = await file_temp(lambda3);
  return list;
}
