import { folder_read_files_exists_ensure } from "../../../love/public/src/folder_read_files_exists_ensure.mjs";
import { bible_audio_folder_book_video_join } from "../../../love/public/src/bible_audio_folder_book_video_join.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { video_generate } from "../../../love/public/src/video_generate.mjs";
import { file_extension_mp4 } from "../../../love/public/src/file_extension_mp4.mjs";
import { image_generate } from "../../../love/public/src/image_generate.mjs";
import { file_exists_not } from "../../../love/public/src/file_exists_not.mjs";
import { text_suffix_without } from "../../../love/public/src/text_suffix_without.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { bible_audio_folder } from "../../../love/public/src/bible_audio_folder.mjs";
export async function ebible_chapter_videos_generate(
  bible_folder,
  chapter_code,
) {
  let folder_path = bible_audio_folder(bible_folder, chapter_code);
  let files = await folder_read_files_exists_ensure(folder_path);
  const suffix = ".txt";
  let filtered = list_filter_ends_with(files, suffix);
  async function lambda2(la) {
    async function lambda(file_path) {
      let joined_text = path_join([folder_path, file_path]);
      let contents = await file_read(joined_text);
      let sw = text_suffix_without(file_path, suffix);
      let joined = path_join([folder_path, sw]);
      let joined_image = joined + ".png";
      const n = await file_exists_not(joined_image);
      if (n) {
        await image_generate(contents, joined_image);
      }
      let joined_video = joined + file_extension_mp4();
      let n2 = await file_exists_not(joined_video);
      if (n2) {
        let joined_audio = joined + ".wav";
        await video_generate(joined_image, joined_audio, joined_video);
      }
      la(joined_video);
    }
    await each_async(filtered, lambda);
  }
  let paths_videos = await list_adder_async(lambda2);
  let path_video = await bible_audio_folder_book_video_join(
    bible_folder,
    chapter_code,
    paths_videos,
  );
  let v = {
    path_video,
  };
  return v;
}
