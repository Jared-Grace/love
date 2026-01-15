import { file_extension_mp4 } from "../../../love/public/src/file_extension_mp4.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { bible_audio_folder } from "../../../love/public/src/bible_audio_folder.mjs";
export function bible_audio_folder_book_video(bible_folder, chapter_code) {
  let folder_path = bible_audio_folder(bible_folder, chapter_code);
  let path_video = path_join([folder_path, chapter_code]);
  path_video += file_extension_mp4();
  return path_video;
}
